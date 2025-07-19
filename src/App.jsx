import NotificationsUser from "./components/NotificationsUser";

const infomations = [
  {
    id: 0,
    text: (
      <div className="flex items-center gap-x-2 bg-[var(--Navy-50)] px-4 py-2">
        <img
          className="w-10 h-10"
          src="/avatar-mark-webber.webp"
          alt=""
        />
        <div>
          <p>
            <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
              Mark Webber
            </span>{" "}
            <span>reacted to your recent post</span>{" "}
            <span className="font-semibold hover:text-[var(--Blue-950)] cursor-pointer">
              My first tournament today!
            </span>{" "}
            <span className="bg-[var(--Red-500)] w-2 h-2 inline-block rounded-full"></span>
          </p>
          <p>1m ago</p>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    text: (
      <>
        <div className="flex items-center gap-x-2 px-4 py-2 bg-[var(--Navy-50)]">
          <img
            className="w-10 h-10"
            src="/avatar-angela-gray.webp"
            alt=""
          />
          <div>
            <p>
              <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                Angela Gray
              </span>{" "}
              <span>followed you</span>{" "}
              <span className="bg-[var(--Red-500)] w-2 h-2 inline-block rounded-full"></span>
            </p>
            <p>5m ago</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <div className="flex items-center gap-x-2 px-4 py-2 bg-[var(--Navy-50)]">
          <img
            className="w-10 h-10"
            src="/avatar-jacob-thompson.webp"
            alt=""
          />
          <div>
            <p>
              <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                Jacob Thompson
              </span>{" "}
              <span>has joined your group</span>{" "}
              <span className="text-[var(--Blue-950)] font-bold">
                Chess Club
              </span>{" "}
              <span className="bg-[var(--Red-500)] w-2 h-2 inline-block rounded-full"></span>
            </p>
            <p>1 day ago</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <div className="flex items-center gap-x-2 px-4 py-2">
          <img
            className="w-10 h-10"
            src="/avatar-rizky-hasanuddin.webp"
            alt=""
          />
          <div>
            <p>
              <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                Rizky Hasanuddin
              </span>{" "}
              <span>sent you a private message</span>
            </p>
            <p>5 days ago</p>
          </div>
        </div>
        <div className="border-1 rounded-md p-2 mx-13 hover:bg-[var(--Blue-100)] cursor-pointer">
          <p>
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2 px-4 py-2">
            <img
              className="w-10 h-10"
              src="/avatar-kimberly-smith.webp"
              alt=""
            />
            <div>
              <p>
                <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                  Kimberly Smith
                </span>{" "}
                <span>commented on your picture</span>
              </p>
              <p>1 week ago</p>
            </div>
          </div>
          <img
            className="w-10 h-10 mr-13 hover:ring-3 rounded-md ring-[var(--Blue-100)] cursor-pointer"
            src="/image-chess.webp"
            alt=""
          />
        </div>
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <div className="flex items-center gap-x-2 px-4 py-2">
          <img
            className="w-10 h-10"
            src="/avatar-nathan-peterson.webp"
            alt=""
          />
          <div>
            <p>
              <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                Nathan Peterson
              </span>{" "}
              <span>reacted to your recent post</span>{" "}
              <span className="font-semibold hover:text-[var(--Blue-950)] cursor-pointer">
                5 end-game strategies to increase your win rate
              </span>
            </p>
            <p>2 weeks ago</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 6,
    text: (
      <>
        <div className="flex items-center gap-x-2 px-4 py-2">
          <img
            className="w-10 h-10"
            src="/avatar-anna-kim.webp"
            alt=""
          />
          <div>
            <p>
              <span className="font-bold hover:text-[var(--Blue-950)] cursor-pointer text-[var(--Navy-950)]">
                Anna Kim
              </span>{" "}
              <span>left the group</span>{" "}
              <span className="text-[var(--Blue-950)] font-bold">
                Chess Club
              </span>
            </p>
            <p>2 weeks ago</p>
          </div>
        </div>
      </>
    ),
  },
];


const App = () => {
  return (
    <div className="max-w-[700px]  mx-auto mt-5 bg-[var(--White)] shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <h2 className="text-2xl font-semibold text-[var(--Navy-950)]">
            Notifications
          </h2>
          <span className="w-8 h-6 bg-[var(--Blue-950)] rounded-md text-white font-semibold text-center">
            3
          </span>
        </div>
        <button type="button" className="hover:text-[var(--Blue-950)] cursor-pointer">Mask all as read</button>
      </div>
      {infomations.map((user) => (
        <NotificationsUser key={user.id} text={user.text} />
      ))}
    </div>
  );
};

export default App;
