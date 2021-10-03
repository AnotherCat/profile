import { loadGetInitialProps } from "next/dist/shared/lib/utils";

type HeaderProps = {
  title: string;
  description: string;
};

const Header = (props: HeaderProps) => (
  <div className="pt-24">
    <div className="container px-3 mx-auto">
      <div className="flex flex-col w-full justify-center items-centre text-center">
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.title}</h1>
        <p className="leading-normal text-2xl mb-8">{props.description}</p>
      </div>
    </div>
  </div>
);
export default Header;
