import React from "react";
import { hasFlag } from "country-flag-icons";
import * as Flags from "country-flag-icons/react/3x2";
import {
  CountryCallingCode,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";

export const useCountries = () => {
  return React.useMemo(() => {
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
      type: "region",
    });
    const countryCodes = getCountries();

    return countryCodes.reduce(
      (result, countryCode) => {
        const countryName = regionNamesInEnglish.of(countryCode);
        if (!countryName || !hasFlag(countryCode)) return result;

        result.push({
          countryCode,
          countryName,
          callingCode: getCountryCallingCode(countryCode),
          Flag: Flags[countryCode],
        });

        return result;
      },
      [] as Array<{
        countryCode: string;
        countryName: string;
        callingCode: CountryCallingCode;
        Flag: Flags.FlagComponent;
      }>,
    );
  }, []);
};
