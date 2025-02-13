import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchSongById } from "../../songApi";
import Review from "../components/Review";
import { fetchData } from "../../api";

const SongInfo = () => {
    const { songid } = useParams();
    const [loading, setLoading] = useState(false);
    const [songData, setSongData] = useState();
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const getSongData = async () => {
            setLoading(true);
            try {
                const result = await searchSongById(songid);
                setSongData(result);
            } catch (err) {
                console.error(err);
            }
        }

        const getReviewData = async () => {
            setLoading(true);
            try {
                const result = await fetchData(`/posts/getbysong?song_id=${songid}`);
                setReviewData(result);
            } catch (err) {
                console.log(err);
            }
        }

        getSongData();
        getReviewData();
    }, []);

    if (!songData) {
        return <p>Song is Loading</p>
    }

    function msToMinutesSeconds(ms) {
        let minutes = Math.floor(ms / 60000);
        let seconds = Math.floor((ms % 60000) / 1000);
        
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }

    return (
        <section className="w-full overflow-hidden px-6 h-screen flex flex-col">
            <div className="bg-primary w-full h-72 rounded-2xl flex px-10 justify-start gap-10">
                <img src={songData?.album?.images[0]?.url} alt="" className="object-contain w-56"/>

                <div className="flex flex-col pt-24">
                    <h1 className="text-5xl font-extrabold">{songData.name}</h1>
                    <h2 className="text-lg font-bold mt-6">{songData.artists[0].name || "Unknown Artist"} . {songData?.album?.name}</h2>
                    <h3 className="text-neutral-400 mt-2">{msToMinutesSeconds(songData?.duration_ms)}</h3>
                </div>
            </div>

            <div className="w-full flex flex-col mt-6">
                <h1 className="text-4xl font-bold ml-2">Reviews</h1>

                <div className="w-full flex flex-col mt-10 gap-2">
                    {reviewData.map((review, index) => (
                        <Review data={review} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SongInfo;