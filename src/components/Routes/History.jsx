import React, { useState, useEffect } from "react";
import "../Styles/history.css";
import { AnimatePresence, motion } from 'framer-motion'

function History() {

    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://api.spacexdata.com/v3/history';
        fetch(url).then(resp => resp.json())
            .then(resp => setPosts(resp))
    }, [])


    return (
        <>
            <div className="History">
                {posts.map(post => (
                <motion.div key={post.id} transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className="card-his" style={{ borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5' }} >


                    <motion.h2 layout="position" className="his-head" >
                        {post.title} 🚀
                    </motion.h2>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ opacity: 0 }}
                                className="expand" >
                                <div class="card-detail-list list-group-flush">
                                    <p class="card-detail-1">Details : <span>{post.details}</span></p>
                                    <p class="card-detail-2">Flight Number : <span>{post.flight_number}</span></p>
                                    <p class="card-detail-3">Event-Data-UTC : <span>{post.event_date_utc}</span></p>
                                </div>
                                <button type="button" class="btn btn-warning"><a href={post.links.article} target="_blank" rel="noreferrer">Article</a></button>
                                <button type="button" class="btn btn-success"><a href={post.links.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a></button>
                            </motion.div>

                        )}
                    </AnimatePresence>

                </motion.div>
                ))}
            </div>
        </>
    )
}

export default History;