import { useLoaderData } from "react-router-dom";

const WatchMatch = () => {
    const video = useLoaderData();
    console.log(video._id, video?.stream_link);

    return (
        <div className="bg-blue-900">
             <tr >
            
               <th className="flex items-center gap-4 justify-center ml-6 mt-8 mb-10  text-4xl font-bold">
                {video?.teams[0]}{" "}
                <img className="w-20"
                  src="https://www.pngmart.com/files/11/Versus-PNG-Transparent.png"
                  alt=""
                />{" "}
                {video?.teams[1]}
              </th>
              
            
              
            </tr>
            <iframe
                className="w-[100%] h-[800px]"
                src={video?.stream_link}
                title="YouTube video player"
                frameBorder="0"
                allow=" autoplay;  encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            
        </div>
    );
};

export default WatchMatch;
