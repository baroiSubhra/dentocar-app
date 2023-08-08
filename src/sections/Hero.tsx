export default function Hero() {
  return (
    <main>
      <div className="home mt-16" id="home">
        <div className="home-left">
          <h1 className="mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-yellow-500">
              CloudSharePlus
            </span>
            <br />
            Seamless File Sharing
          </h1>
          <h4 className="mb-4 color-secondary">
            Welcome to CloudSharePlus, the ultimate online file sharing platform
            designed to simplify collaboration and boost productivity. With our
            secure and user-friendly interface, you can effortlessly store,
            organize, and share your files from anywhere, anytime. Experience
            seamless collaboration like never before with CloudSharePlus.
          </h4>
          <div className="pt-4 cta">
            {/* <router-link to="/login">
                        <Button label="Login Or Signup" />
                    </router-link> */}
          </div>
        </div>
        <div className="home-right center">
          <img className="img-wdth" src="../../assets/images/home.png" alt="" />
        </div>
      </div>
    </main>
  );
}
