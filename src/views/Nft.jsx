import picture1 from '../assets/images/picture1.png'
import picture0 from '../assets/images/picture0.png'
import picture9 from '../assets/images/picture9.png'
import picture8 from '../assets/images/picture8.png'
import avatar from '../assets/images/avatar.png'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { loadAuction } from '../services/blockchain'
import { setGlobalState, truncate, useGlobalState } from '../store'

const Nft = () => {
  const [auction] = useGlobalState('auction')
  const { id } = useParams()
  useEffect(async () => {
    await loadAuction(id)
  })

  const onPlaceBid = () => {
    setGlobalState('auction', auction)
    setGlobalState('bidBox', 'scale-100')
  }
  return (
    <>
      <div
        className="grid sm:flex-row md:flex-row lg:grid-cols-2 gap-6
      md:gap-4 lg:gap-3 py-2.5 text-white font-sans capitalize
      w-4/5 mx-auto mt-5 justify-between items-center"
      >
        <div
          className=" text-white h-[400px] bg-gray-800 rounded-md shadow-xl 
        shadow-black md:w-4/5 md:items-center lg:w-4/5 md:mt-0"
        >
          <img
            src={auction?.image}
            alt="nft"
            className="object-contain w-full h-80 mt-10"
          />
        </div>
        <div className="">
          <div className="py-2">
            <h1 className="font-bold text-lg mb-3">{auction?.name}</h1>
            <p className="font-light text-sm">
              Owned by:{' '}
              <span className="text-green-500">
                {auction?.owner ? truncate(auction?.owner, 4, 4, 11) : null}
              </span>
            </p>
            <p className="text-sm py-2">{auction?.description}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <img src={avatar} alt="" className="flex flex-shrink h-5 w-5" />
              highest Bid by
              <span className="font-bold text-base px-1">lina foxxx</span>
              <p>0.150ETH</p>
            </div>
            <div className="flex flex-row items-center">
              <p>other Bids :</p>
              <div className="flex flex-wrap sm:flex-wrap md:flex-wrap h-5 w-8 px-1">
                <img src={avatar} alt="" />
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-5 ">
            <div>
              <span className="font-bold">Current Price</span>
              <p className="text-sm font-light">{auction?.price}ETH</p>
            </div>

            <div className="lowercase">
              <span className="font-bold">05h :20m :12s</span>
              <div
                className="bg-gray-600 h-[8px] w-40 flex rounded-md
              items-center overflow-hidden mt-2"
              >
                <div
                  className="h-[80%] w-[60.5%] bg-green-500 flex justify-end
                items-center rounded-md pr-[2px]"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2 mt-2">
            <button
              type="button"
              className="bg-gray-600 shadow-md shadow-black hover:bg-green-700
              md:text-xs p-2.5 rounded-sm cursor-pointer font-light"
              onClick={onPlaceBid}
            >
              Place a Bid
            </button>
            <button
              type="button"
              className="shadow-md shadow-black text-white
            bg-green-500 hover:bg-green-700 md:text-xs p-2.5
              rounded-sm cursor-pointer font-light"
            >
              Claim NFT
            </button>
          </div>
        </div>

        <div>
          <div className="mt-12 px-2 py-1 font-bold text-2xl italic">
            NFT-World
          </div>
          <div className="px-2 font-semibold text-xs">Chat with mentorz</div>
          <div
            className="bg-gray-800 bg-opacity-50 h-[calc(100vh_-_18rem)] overflow-y-auto w-6/8 
        rounded-md p-2 sm:p-8 mt-5 shadow-md shadow-[#25bd9c] sm:w-[200%]"
          >
            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture0}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              vince-Nft
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo and resize the texture pf the element
              the texture pf the element the texture pf the element.
            </div>

            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture8}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Mason-Nft
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo and the texture pf the element the
              texture pf the element the texture pf the element resize the
              texture pf the element check the radiant.
            </div>

            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture9}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Dapp-Nft
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo and the texture pf the element the
              texture pf the element resize the texture pf the element check the
              radiantcheck the radiant.
            </div>

            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture1}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Guest
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo the texture pf the element the texture
              pf the element and resize the texture pf the element check the
              radiantcheck the radiant.
            </div>

            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture1}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Guest
            </div>
            <div className="ml-12 text-xs">
              check the radiant in acimbo the texture pf the element the texture
              pf the element and resize the texture pf the element check the
              radiantcheck the radiant.
            </div>
            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture1}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Guest
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo the texture pf the element the texture
              pf the element and resize the texture pf the element check the
              radiantcheck the radiant.
            </div>

            <div className="flex flex-row font-bold mt-5 text-[#25bd9c]">
              <img
                src={picture1}
                alt=""
                className="rounded-full h-7 w-12 px-2"
              />
              Guest
            </div>

            <div className="ml-12 text-xs">
              check the radiant in acimbo the texture pf the element the texture
              pf the element and resize the texture pf the element check the
              radiantcheck the radiant.
            </div>

            <div className="flex flex-row justify-between items-center bg-gray-800 rounded-md mt-11">
              <textarea
                className="block w-full text-sm resize-none
            text-slate-100 bg-transparent border-0
              focus:outline-none focus:ring-0 h-10 px-4 py-2"
                type="text"
                name="Leave a Message"
                placeholder="Leave a Message"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nft
