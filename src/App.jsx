import InputCommentBox from "./components/Comment";
import CommentsContianer from "./components/Comment/CommentsContianer";
import Container from "./components/common/Container";
import { CommentsProvider } from "./context/commentContext";

function App() {
  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center  ">
        <CommentsProvider>
          <Container className="">
            <InputCommentBox />
            <CommentsContianer />
          </Container>
        </CommentsProvider>
      </div>
    </>
  );
}

export default App;
