import dynamic from "next/dynamic";

const NoSRR = (props) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSRR), { ssr: false });
