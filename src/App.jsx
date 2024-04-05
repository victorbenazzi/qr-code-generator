import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { ToastContainer, toast } from "react-toastify";
import logo from "/logo-victor-benazzi.svg";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 2000,
        margin: 1,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }
  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  const notify = () => toast("Download Iniciado!");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <header className="h-8 w-full flex flex-col justify-center items-center py-8 border border-stone-800">
        <a href="https://www.victorbenazzi.tech/" target="_blank">
          <img src={logo} alt="Logo victor Benazzi - Web Design" />
        </a>
      </header>
      <main className="flex flex-col justify-center items-center md:mt-20 mt-10 px-4 h-full">
        <div className="w-full max-w-[480px] flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-2 items-center w-full">
            <h1 className="text-2xl  md:text-4xl xl:text-5xl font-bold text-center">
              Gerador de QR Code
            </h1>
            <p>Gratuito e não expira!</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="p-4 border border-stone-800 rounded-lg ">
              <QRCode value={link} />
            </div>
            <p className="text-sm text-stone-500">
              {" "}
              Dimensões: 2000 x 2000 pixels
            </p>
          </div>
          <div className="flex flex-row w-full h-14 p-2 bg-stone-800 rounded-lg focus:outline-dotted">
            <input
              type="text"
              placeholder="Digite o link para gerar o QR Code"
              value={link}
              onChange={(e) => handleQrcode(e)}
              className="w-full h-full px-4  bg-stone-800  focus:outline-none"
            />

            <a
              href={qrcodeLink}
              download="qr-code.png"
              onClick={notify}
              className="flex flex-col justify-center items-center h-full w-fit px-4 py-2 rounded-lg leading-none bg-stone-100 text-stone-950 hover:bg-white ">
              Download
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
