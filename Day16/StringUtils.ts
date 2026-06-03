export function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

 class StringUtils {
    public static concatenation(str1: string, str2: string, str3: string): string {
        return str1 + str2 + str3;
    }

    public static toLowerCaseFormatter(str: string): string {
        return str.toLowerCase();
    }
}

export default StringUtils; // Exporting the class as default allows us to import it without curly braces in other files.   