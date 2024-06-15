'use strict';

var lezerFeel = require('lezer-feel');
var language = require('@codemirror/language');

/**
 * Create an array of syntax errors in the given tree.
 *
 * @param {Tree} syntaxTree
 * @returns {LintMessage[]} array of syntax errors
 */
function lintSyntax(syntaxTree) {

  const lintMessages = [];

  syntaxTree.iterate({
    enter: ref => {
      const node = ref.node;

      if (!node.type.isError) {
        return;
      }

      const parent = node.parent;
      const next = getNextNode(node);

      const message = {
        from: node.from,
        to: node.to,
        severity: 'error',
        type: 'Syntax Error'
      };

      if (node.from !== node.to) {
        message.message = `Unrecognized token in <${parent.name}>`;
      } else if (next) {
        message.message = `Unrecognized token <${next.name}> in <${parent.name}>`;
        message.to = next.to;
      } else {
        const before = parent.enterUnfinishedNodesBefore(node.to);
        message.message = `Incomplete <${ (before || parent).name }>`;
      }

      lintMessages.push(message);
    }
  });

  return lintMessages;
}

function getNextNode(node) {
  if (!node) {
    return null;
  }

  return node.nextSibling || getNextNode(node.parent);
}

/**
 * Generates lint messages for the given syntax tree.
 *
 * @param {Tree} syntaxTree
 * @returns {LintMessage[]} array of all lint messages
 */
function lintAll(syntaxTree) {

  const lintMessages = [
    ...lintSyntax(syntaxTree)
  ];

  return lintMessages;
}

/**
 * Create an array of syntax errors for the given expression.
 *
 * @param {String} expression
 * @returns {LintMessage[]} array of syntax errors
 */
function lintExpression(expression) {

  const syntaxTree = lezerFeel.parser.parse(expression);

  const lintMessages = lintAll(syntaxTree);

  return lintMessages;
}

/**
 * CodeMirror extension that provides linting for FEEL expressions.
 *
 * @param {EditorView} editorView
 * @returns {Source} CodeMirror linting source
 */
const cmFeelLinter = () => editorView => {

  // don't lint if the Editor is empty
  if (editorView.state.doc.length === 0) {
    return [];
  }

  const tree = language.syntaxTree(editorView.state);

  const messages = lintAll(tree);

  return messages.map(message => ({
    ...message,
    source: message.type
  }));
};

exports.cmFeelLinter = cmFeelLinter;
exports.lintExpression = lintExpression;
