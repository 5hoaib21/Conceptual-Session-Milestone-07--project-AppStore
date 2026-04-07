
import AppCart from "../../components/ui/AppCart";
import { DotLoader } from "react-spinners";
import useApps from "../../hooks/useApps";

const Apps = () => {

  
  const { apps, loading } = useApps();



  return (
    <div className="container mx-auto my-20 ">
      {/* section header */}
      <div className="mb-10 text-center max-w-[50%] mx-auto">
        <h1 className="text-5xl font-bold">All apps</h1>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {loading ? (
        <div className="flex items-center justify-center">
          <DotLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <AppCart key={i} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
