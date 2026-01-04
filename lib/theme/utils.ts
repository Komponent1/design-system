export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export function mergeTokens<T extends object>(base: T, custom?: DeepPartial<T>): T {
  if (!custom) return base;

  const result = { ...base };

  for (const key in custom) {
    const customValue = custom[key];
    const baseValue = result[key as unknown as keyof T];

    if (
      customValue &&
      typeof customValue === 'object' &&
      !Array.isArray(customValue) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      result[key as unknown as keyof T] = mergeTokens(
        baseValue,
        customValue as DeepPartial<typeof baseValue>,
      );
    } else if (customValue !== undefined) {
      result[key as unknown as keyof T] = customValue as T[Extract<keyof T, string>];
    }
  }

  return result;
}
