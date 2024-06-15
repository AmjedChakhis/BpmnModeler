export namespace ExpressionLanguageModule {
    let __init__: string[];
    let expressionLanguage: (string | typeof FeelExpressionLanguage)[];
    let templating: (string | typeof FeelersTemplating)[];
    let conditionChecker: (string | typeof ConditionChecker)[];
}
import { FeelExpressionLanguage } from './FeelExpressionLanguage';
import { FeelersTemplating } from './FeelersTemplating';
import { ConditionChecker } from './ConditionChecker';
export { FeelExpressionLanguage, FeelersTemplating, ConditionChecker };
