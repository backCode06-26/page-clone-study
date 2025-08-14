import IntroFull from "./layout/article/IntroFull";
import IntroPrice from "./layout/article/IntroPrice";
import IntroReatrue from "./layout/article/IntroReatrue";
import IntroFirstShort from "./layout/article/IntroFirstShort";
import IntroTargetShort from "./layout/article/IntroTargetShort";
import IntroTarget from "./layout/article/IntroTarget";
import IntroLastShort from "./layout/article/IntroLastShort";

function Main() {
    return (
        <>
            <IntroFirstShort></IntroFirstShort>
            <IntroTargetShort></IntroTargetShort>
            <IntroReatrue></IntroReatrue>
            <IntroFull></IntroFull>
            <IntroPrice></IntroPrice>
            <IntroTarget></IntroTarget>
            <IntroLastShort></IntroLastShort>
        </>
    );
}

export default Main;