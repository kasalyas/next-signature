import { getRegionByCode } from "../../../utils/getRegion";
import { useSignatureState } from "../../context";
import Link from "../../elements/link";

const Marketing = () => {
  const { state } = useSignatureState();

  const region = getRegionByCode(state.region);
  return (
    <div data-testid="marketingLinks">
      {region?.bCorpDirectory && (
        <>
          <Link
            href={`https://bcorporation.net/directory/${region.bCorpDirectory}`}
            strong={true}
            bigger={true}
          >
            B Corp certified
          </Link>{" "}
        </>
      )}

      {state.region === "EU" && (
        <>
          |{" "}
          <Link
            href="https://www.kinandcarta.com/en/insights/2021/08/2021-fast-company-innovation-award/"
            strong={true}
            bigger={true}
          >
            Fast Company's Best Workplace for Innovators 2021
          </Link>
        </>
      )}
    </div>
  );
};

export default Marketing;
