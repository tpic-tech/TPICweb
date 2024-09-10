import React from "react";
import teacher from "../../assets/Teacher Coordinator.jpg";

function Message() {
  return (
    <>
      <div>
        <div className="flex flex-wrap flex-col justify-center items-center text-center max-w-screen-lg">
          <h1 className="text-base3 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]">
            Message from the desk
          </h1>
          <div className="text-center mt-4 inline-block h-1 w-[320px] bg-base2 rounded-lg"></div>
        </div>
        <div className="w-full flex flex-wrap flex-col justify-center items-center mt-16 rounded-md border-2 border-base3 py-10 px-4 sm:px-10 ">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={teacher}
              alt="Teacher Coordinator"
              width={250}
              height={250}
              className="w-[80px] sm:w-[120px] object-cover rounded-full border-4 border-base2"
            />
            <div className="mt-2 flex flex-wrap flex-col justify-center items-center">
              <h2 className="text-[18px] font-SFProDisplay  font-bold leading-[135%] text-base3">
                Dr. Digar Singh
              </h2>
              <h2 className="text-[16px] font-SFProDisplay  font-semibold leading-[135%] text-white">
                Faculty Co-ordinator, TPIC
              </h2>
            </div>
          </div>
          <div className=" flex flex-wrap pt-8">
            <h2 className="text-[16px] sm:text-[20px] md:text-[24px] font-Montserrat font-bold leading-[135%] text-base3 text-center">
              Ideate. Incubate. Inovtate. Serve
            </h2>
            <p className="text-[14px] sm:text-[16px] font-Montserrat font-normal leading-[135%] text-white text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              obcaecati quasi odit, aliquam necessitatibus est placeat eum nulla
              dolore consequatur, quidem, blanditiis eligendi laboriosam
              excepturi voluptate? Natus eligendi minus est. Provident illum
              minus aspernatur voluptas recusandae eos incidunt, totam facere
              voluptatibus laudantium mollitia eaque tenetur doloremque aliquam
              consequuntur sed nulla, labore nihil suscipit, neque facilis? Quae
              dolor adipisci recusandae voluptas? Mollitia corrupti, illum atque
              similique fuga ea repellendus, possimus, dolorum non quas enim
              maiores libero. Doloribus sunt commodi obcaecati itaque
              consectetur libero quisquam quaerat atque? Architecto quis
              corporis labore exercitationem. Recusandae, exercitationem fugit
              dicta maiores, sed sint commodi nihil a reprehenderit, animi
              placeat. Nemo et ipsum tempora placeat cumque officia qui dolorum
              eius error enim, praesentium ipsam dolores excepturi voluptate!
              Similique molestias quisquam maxime. Tempora ducimus eveniet eum?
              Consectetur, consequatur. Alias ex quia in quibusdam ratione!
              Ratione, illum vero assumenda consectetur facere deserunt saepe
              aperiam rem neque recusandae tempore consequatur. Tempora, nobis
              provident exercitationem aspernatur illo, repellat ipsam officia
              enim reprehenderit neque iusto aperiam obcaecati vel? Dignissimos
              similique quisquam facilis ducimus recusandae enim numquam veniam
              asperiores. Sint vitae reprehenderit voluptate? Voluptates, enim?
              Fuga, accusantium voluptas nihil totam iste molestias. Illum in
              consequatur porro itaque possimus vitae quam nesciunt qui? Animi
              doloremque iste blanditiis odit eos laudantium vitae libero ea ut?
              Esse labore omnis, excepturi veniam maiores vero minus quia animi,
              modi optio asperiores non velit pariatur aliquam! Explicabo, amet.
              Accusantium libero voluptas quas facilis non cupiditate suscipit
              dicta labore minima?
            </p>
          </div>
        </div>
        <div className="mt-20">
          <a href="https://www.hnbgu.ac.in/">
            <h2 className="text-[16px] font-SFProDisplay leading-[135%] tracking-tight font-light text-base3 hover:text-base2">
              &gt; View and Download the brocher of TPIC from here.
            </h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default Message;
