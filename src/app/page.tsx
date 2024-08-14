import Image from "next/image";

export default function Home() {
  return (
    <div className={`flex flex-row mb-3`}>
    <div className="flex flex-col gap-2 md:flex-row grow md:gap-0">
        <div className={`flex flex-col`}>
            <select
                className={`mr-4 px-2 py-2 border border-darkgray rounded-md focus:text-darkgray focus:outline-none focus:border-primary focus:shadow focus:shadow-primary`}
            >
                <option value="">Please choose</option>
                <option value="Family">Immediate family members working in HKTDC</option>
                <option value="Business">
                    You / your immediate family members having business relationship with HKTDC
                </option>
                <option value="Others">Others</option>
            </select>
        </div>
    </div>
</div>
  );
}
