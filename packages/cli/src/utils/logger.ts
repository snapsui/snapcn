import chalk from "chalk";
import gradient from "gradient-string";

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.cyan(...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args));
  },
  break() {
    console.log("");
  },
};

const theme = {
  magenta: "#9E7AFF",
  red: "#FE8BBB",
  yellow: "#FFBD7A",
};

const printer = gradient(Object.values(theme));

export const ColorFullText = (string: string) => printer.multiline(string);
