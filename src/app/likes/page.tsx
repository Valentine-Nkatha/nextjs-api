"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaEye } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";

const LikesPage = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [title, setTitle] =useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    // Simulate fetching data from an API or a database
    const fetchData = async () => {
      try {
        // Replace with your actual data fetching logic
        const response = await fetch('https://dummyjson.com/posts/1');
        const body = await response.json();
        
        setLikes(body.reactions.likes);
        setDislikes(body.reactions.dislikes);
        setViews(body.views);
        setTitle(body.title)
        setBody(body.body)
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleViews = () => setViews (views + 1)
    

  return (
    <div className="w-6/12 border p-10 mt-5 ml-6 bg-slate-300">
      <h1 className="likes text-[20px]"><b>Likes Page</b></h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        
        
          <div className="mb-4 flex gap-4 mt-6">
            <div  onClick={handleLike}
             
            >
            <FaHeart className="text-red-600 text-[30px]"/>
             
              <span>{likes}</span>
              </div>
            
            <div
              onClick={handleDislike}
              
            >
              <FaHeartBroken className="text-red-600 text-[30px]"/>
              <span>{dislikes}</span>
            
            </div>
            <div
              onClick={handleViews}
             
            >
              <FaEye className="text-black text-[30px]"/>
              <span>{views}</span>
            
          </div>
          

         
        </div>
      )}
    </div>
  );
};

export default LikesPage;