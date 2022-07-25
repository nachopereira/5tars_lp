import Image from "next/image";
import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [favoriteLeague, setFavoriteLeague] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [discordUsername, setDiscordUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    nickName &&
      email &&
      email.indexOf("@") > -1 &&
      walletAddress &&
      favoriteLeague &&
      favoriteTeam &&
      onValidated({
        MERGE0: email,
        MERGE1: nickName,
        MERGE2: walletAddress,
        MERGE3: favoriteLeague,
        MERGE4: favoriteTeam,
        MERGE5: discordUsername,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setNickName("");
    setEmail("");
    setWalletAddress("");
    setFavoriteLeague("");
    setFavoriteTeam("");
    setDiscordUsername("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className=" sm:rounded-md">
        <div className="py-1">
          <input
            required
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            id="nick-name"
            autoComplete="given-name"
            placeholder="Nickname*"
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white"
          />
        </div>
        <div className="py-2">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            autoComplete="email"
            placeholder="Email*"
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white"
          />
        </div>
        <div className="py-2 relative">
          <input
            required
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            id="wallet-address"
            placeholder="Wallet Address*"
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white"
          />
          <div className="absolute -right-7 top-5 hover:before:block hover:before:w-40 hover:before:h-14 hover:before:bg-brand hover:before:border-2 hover:before:border-solid hover:before:border-brand-light hover:before:shadow-brand-light hover:before:rounded-lg hover:before:absolute hover:before:right-0 hover:before:ease-in-out hover:before:transition-shadow">
            <Image
              src={"/icon-info.svg"}
              width={15}
              height={17}
              alt={"Icon Info"}
            ></Image>
          </div>
        </div>
        <div className="py-2">
          <select
            required
            id="favorite-league"
            value={favoriteLeague}
            onChange={(e) => setFavoriteLeague(e.target.value)}
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white invalid:text-brand-text"
          >
            <option value="" disabled selected>
              Favorite League*
            </option>
            <option value="Premiere Legue">Premiere Legue</option>
            <option value="La Liga">La Liga</option>
            <option value="Calcio">Calcio</option>
            <option value="Ligue 1">Ligue 1</option>
            <option value="Bundesliga">Bundesliga</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="py-2">
          <input
            required
            type="text"
            value={favoriteTeam}
            onChange={(e) => setFavoriteTeam(e.target.value)}
            id="favorite-team"
            placeholder="Favorite Team*"
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            value={discordUsername}
            onChange={(e) => setDiscordUsername(e.target.value)}
            id="discord-username"
            placeholder="Discord username (optional)"
            className="focus:ring-brand-light focus:border-brand-light block w-full border-brand-light rounded-md bg-brand placeholder-brand-text border-2 text-white"
          />
        </div>
        <div className="pb-6 pt-5 py-2">
          <button
            type="submit"
            className="w-full py-3 px-6 border border-transparent text-md font-medium rounded-md bg-brand-light focus:outline-none hover:shadow-lg hover:shadow-brand-light2 transition ease-in-out"
          >
            Submit
          </button>
        </div>
        {status === "error" && (
          <div className="py-2 px-2 rounded-lg bg-orange-400">
            <p
              className="text-white"
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          </div>
        )}
        {status === "success" && (
          <div className="py-2 px-2 rounded-lg bg-lime-800">
            <p
              className="text-white"
              dangerouslySetInnerHTML={{ __html: message }}
            ></p>
          </div>
        )}
      </div>
    </form>
  );
};

const BecomePioneerFrom = (props) => {
  const postUrl = `https://5tars.us9.list-manage.com/subscribe/post?u=7e4fb2fc68cc390d94769c791&id=c5951ee790`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default BecomePioneerFrom;
