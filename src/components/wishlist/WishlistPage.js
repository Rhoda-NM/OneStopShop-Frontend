import WishlistItems from "./WishlistItems";
import JustForYouSection from "./JustForYou";
import Footer from "../user/Footer";
import styled from "styled-components";
import Header from "../Header/Header";

const WishlistPage = () => {
  return (
    <StyledWishlistPage>
      <Header />
      <Main>
        <WishlistItems />
        <JustForYouSection />
      </Main>
      <Footer />
    </StyledWishlistPage>
  );
};

export const Wishlist = () => {
  return (
    <Main>
      <WishlistItems />
    </Main>
  )
}

const StyledWishlistPage = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const Main = styled.main`
    margin-top: 150px
`

export default WishlistPage;