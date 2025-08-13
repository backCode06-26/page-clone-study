import IntroFull from "./layout/article/IntroFull";
import IntroPrice from "./layout/article/IntroPrice";
import IntroReatrue from "./layout/article/IntroReatrue";
import IntroFirstShort from "./layout/article/IntroFirstShort";
import IntroTargetShort from "./layout/article/IntroTargetShort";

function Main() {
    return (
        <>
            <IntroFirstShort></IntroFirstShort>
            <IntroTargetShort></IntroTargetShort>
            <IntroReatrue></IntroReatrue>
            <IntroFull></IntroFull>
            <IntroPrice></IntroPrice>
        </>
    );
}

export default Main;