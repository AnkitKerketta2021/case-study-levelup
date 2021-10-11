import React, { useState } from "react";
// import { Card, } from 'react-bootstrap'
import { withRouter } from "react-router";
// import { withRouter } from 'react-router'
import "./SearchView.css";
import Pagination from "../pagination/Pagination";

function Search() {
  const [posts, setposts] = useState([
    {
      question: "Question:1",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quasi optio. Ipsa voluptatem animi nisi veritatis excepturi laboriosam voluptates repellat officia, similique quis harum ad provident recusandae impedit distinctio autem nihil natus. Animi perferendis blanditiis explicabo enim quaerat earum, aperiam sapiente illo minus necessitatibus iste, omnis doloribus deleniti magni ipsum!",
      level: "Easy",
    },
    {
      question: "Question:2",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repellat officiis illum voluptas ut voluptatem sed odit est, eligendi a dolor repellendus sequi ad, saepe nihil odio explicabo totam natus rerum quod ullam soluta?",
      level: "Intermediate",
    },
    {
      question: "Question:3",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate exercitationem distinctio sunt excepturi aperiam veniam doloribus cum tenetur voluptatem deserunt omnis, eos tempora, velit corrupti quia doloremque id necessitatibus, obcaecati qui nesciunt. Culpa, molestias expedita? Veniam repudiandae quo architecto ad assumenda! Nostrum numquam tempora voluptas cupiditate eveniet in nisi, dolores debitis esse delectus fuga natus vel, culpa nulla sed aliquam officia perferendis ipsa saepe alias.",
      level: "Expert",
    },
    {
      question: "Question:4",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed rerum aspernatur ratione ab. Laudantium iure dolore expedita quo, voluptatem fuga ipsa recusandae omnis illo. Aliquam numquam aperiam molestiae possimus autem qui nemo!",
      level: "Easy",
    },
    {
      question: "Question:5",
      answer: " amreybertbuIrubiibyiuthink Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ipsam facilis vero.",
      level: "Intermediate",
    },
    {
      question: "Question:6",
      answer: "I believe easily anyonejhdjbydnfhynxmrctvbuhjn",
      level: "Expert",
    },
    {
      question: "Question:7",
      answer:
        "bvsrtyuijhgfdsxcgh litia molestiae quasi odio? Et cupiditate facilis illum asperiore dtfygnubyvtcetvrytu csrvtfbygnuhmixrectvbyuni ",
      level: "Easy",
    },
    {
      question: "Question:8",
      answer:
        "zqwxecrvtbynumi,oqzwxecrvtbynaqwsderfgth zwxecrvtbynumaxscdvfbgnhmj",
      level: "Intermediate",
    },
    {
      question: "Question:9",
      answer: "qazxwsxedcrghyj rfgvbwedcfvbdrftghjfghn dfghjnm",
      level: "Expert",
    },
    {
      question: "Question:10",
      answer: "Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo praesentium et minima a. Dolorum maiores mollitia ducimus provident voluptas esse culpa, repellat libero beatae facilis architecto ipsum, reiciendis quae atque quam, ut maxime. Debitis, ex ratione possimus necessitatibus, autem consectetur facere quos, repudiandae eos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo praesentium et minima a. Dolorum maiores mollitia ducimus provident voluptas esse culpa, repellat libero beatae facilis architecto ipsum, reiciendis quae atque quam, ut maxime. Debitis, ex ratione possimus necessitatibus, autem consectetur facere quos, repudiandae eos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo praesentium et minima a. Dolorum maiores mollitia ducimus provident voluptas esse culpa, repellat libero beatae facilis architecto ipsum, reiciendis quae atque quam, ut maxime. Debitis, ex ratione possimus necessitatibus, autem consectetur facere quos, repudiandae eos deleniti pariatur eaque voluptatum itaque minus voluptas quia quas molestiae. deleniti pariatur eaque voluptatum itaque minus voluptas quia quas molestiae. deleniti pariatur eaque voluptatum itaque minus voluptas quia quas molestiae. dolor sit amet consectetur adipisicing elit. Ipsa, placeat nostrum minima mollitia molestiae quasi odio? Et cupiditate facilis illum asperiores nihil, libero aperiam optio dicta earum dolorem quam, hic nostrum tenetur distinctio.",
      level: "Easy",
    },
    {
      question: "Question:11",
      answer: "qazxswedcvfrtgbnhyujm bgt  litia molestiae quasi odio? Et cupiditate facilis illum asperiores nihil, libero aperiam opti yhnmjuikjhvcsertyhj",
      level: "intermediate",
    },
    {
      question: "Question:12",
      answer: "qzwxecrvcexscvdbfnghhmerjtghsjdfghxcvbnmdekfgthyjerityui",
      level: "Expert",
    },
    {
      question: "Question:13",
      answer:
        "bvsrtyuijhgfdsxcgh dtfygn Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum, mollitia illo sit dolor voluptas itaque in, fuga beatae consequuntur amet deleniti?   ubyvtcetvrytu csrvtfbygnuhmixrectvbyuni ",
      level: "Easy",
    },
    {
      question: "Question:114",
      answer:
        "zqwxecrvtbynumi,oqzwxecrvtbynaqwsderfgth zwxecrvtbynumaxscdvfbgnhmj",
      level: "Intermediate",
    },
    {
      question: "Question:15",
      answer: "qazxwsxedcrghyj rfgvbwedcfvbdrftghjfghn dfghjnm",
      level: "Expert",
    },
    {
      question: "Question:16",
      answer: "qwertyujhvcxswertyujhgfrdfghjkmjnhgfdxcvbnmjnhgfghj",
      level: "Easy",
    },
    {
      question: "Question:17",
      answer: "qazxswedcvfrtgbnhyujm bgtyhnmjuikjhvcsertyhj",
      level: "intermediate",
    },
    {
      question: "Question:18",
      answer: "qzwxecrvcexscvdbfnghhmerjtghsjdfghxcvbnmdekfgthyjerityui",
      level: "Expert",
    },
    {
      question: "Question:19",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum, mollitia illo sit dolor voluptas itaque in, fuga beatae consequuntur amet deleniti?",
      level: "Expert",
    },
    {
      question: "Question:20",
      answer: "qzwxecrvcexscvdbfnghhmerjtghsjdfghxcvbnmdekfgthyjerityui",
      level: "Expert",
    },
    {
      question: "Question:21",
      answer: "qzwxecrvcexscvdbfnghhmerjtghsjdfghxcvbnmdekfgthyjerityui",
      level: "Expert",
    },
    {
      question: "Question:22",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolorum, mollitia illo sit dolor voluptas itaque in, fuga beatae consequuntur amet deleniti?",
      level: "Expert",
    },
  ]);
  const [showPerPage, setshowPerPage] = useState(5);
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setpagination({ start: start, end: end });
  };

  return (
    <div>
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((post) => (
            <div className="col-md-12 p-2" key={post.question}>
              <div className="card ">
                <div className="card-answer  ">
                  {/* <h4>{post.question, post.answer}</h4> */}
                  <h5 className="ques">{post.question}</h5>
                  <p className="ans">{post.answer}</p>
                </div>
                <hr style={{opacity:0.15, width:'100%'}} />
              </div>
            </div>
          ))}
        </div>

        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default withRouter(Search);
