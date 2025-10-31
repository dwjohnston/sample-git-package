export function foo(value: string, optionalSecondValue?: string, optionalThirdValue?: string): string {
    return `hello ${value} ${optionalSecondValue ? optionalSecondValue : ''} ${optionalThirdValue ? optionalThirdValue : ''}`;
}