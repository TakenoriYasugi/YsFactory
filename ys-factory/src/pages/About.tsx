import { Box, Card, CardContent, CardMedia, Container, Stack, Table, Typography, autocompleteClasses } from "@mui/material";
import DrawerAppBar from "../uiparts/DrawerAppBar";
import { Link } from "react-router-dom";
import facePhoto from "../images/yasugi.jpeg"

const cardContent = <>
    <CardMedia sx={{p: 1}} >
        <img src={facePhoto} className="face-photo"/>
    </CardMedia>
    <CardContent>
        <Typography>
            安木 岳規 （Takenori Yasugi）
        </Typography>
        <Typography sx={{p: 1}}>
            1994年10月2日生まれ。一児の父。<br/>中学生時代に始めた<Link to='https://www.tonyu.jp/'>TonyuSystem</Link>によるゲーム制作を通じてプログラミングの楽しさを知る。<br/>
            現在はクラウド系SEの傍ら、フリーランスエンジニアへの転身に向けて活動中。
        </Typography>
    </CardContent>
</>

const About = () => {
    return (
        <>
            <DrawerAppBar/>
            <Container sx={{p: 2}}>
                <Card>
                    <Stack direction="row" display={{sm: 'flex', xs: 'none'}} sx={{p: 5}}>
                        {cardContent}
                    </Stack>

                    <Stack direction="column" display={{sm: 'none', xs: 'block'}}>
                        {cardContent}
                    </Stack>
                </Card>
                
            </Container>

            <Box sx={{p: 2}}>
                <Typography variant='h5' className='heading'>略歴</Typography>
                <Box sx={{p: 1}}>
                <section id="biography">
                    
                    <Typography variant='h6' className='subheading'>生まれと学びの地、そして情報科学への情熱</Typography>
                    <p>1994年、自然豊かな鳥取県鳥取市の地に生まれた私は、中学時代に出会ったTonyuSystemをきっかけにプログラミングの世界に魅了されました。この早い段階での出会いが、後に技術者としての礎を築くことになります。</p>
                    <p>2015年、高知大学理学部への入学を果たし、応用理学科情報科学コースで学びを深めながら、基本情報技術者、応用情報技術者試験に合格しました。卒業研究では「視覚障害者向け白杖型歩行支援デバイスの開発」に取り組み、RealSenseを用いた屋外対応の研究を行い、C#（WPF）を駆使したGUIアプリケーションの開発を手がけました。</p>

                    <Typography variant='h6' className='subheading'>社会への第一歩と技術者としての成長</Typography>
                    <p>大学卒業後の2019年、私は株式会社日立社会情報サービスに入社。官公庁系システム開発を中心に担当しながら、情報処理安全支援士試験にも合格しました。ICカードを使用した個人認証システムの開発・保守、SwiftによるmacOSクライアントアプリケーション開発、JavaScriptでのブラウザ拡張機能開発、Javaを用いたWebアプリケーションの保守と、多岐にわたるプロジェクトに関わりました。</p>

                    <Typography variant='h6' className='subheading'>新たな挑戦とキャリアの発展</Typography>
                    <p>2022年、キャリアの次なるステップとして株式会社フレクトに転職。SalesforceやMuleSoftの研修を経て、大手航空会社の基幹システム開発プロジェクトに参画し、AWS Cloud PractitionerやMuleSoft Certified Developer Level1の資格を取得しました。続く2023年には、大手水処理専業会社の社内アプリケーションPoCプロジェクトにてReactを用いたフロントエンド開発を担当し、その後、大手電力会社のプロジェクトでFlutterを用いたフロントエンド開発にも挑戦しました。 Cloud PractitionerやMuleSoft Certified Developer Level1の資格を取得しました。2023年には、大手水処理専業会社、大手電力会社のPoCプロジェクトでそれぞれReactとFlutterを用いたフロントエンド開発を担当しました。</p>

                    <Typography variant='h6' className='subheading'>フリーランスへの道と自己実現</Typography>
                    <p>現在、私はフリーランスとしての転向を視野に入れ、個人の開発プロジェクトにも力を入れています。その一環として、「繋がらないSNS EchoNor」の開発に情熱を注いでいます。これまでの経験と持ち前の技術力を武器に、これからも情報科学の分野で新たな価値を創造し続ける所存です。 EchoNor」の開発に情熱を注いでいます。</p>
                    </section>
                </Box>
            </Box>

            <Box sx={{p: 2}}>
                <Typography variant='h5' className='heading'>スキルセット</Typography>
                <Typography variant='h6' className='subheading'>保有資格</Typography>
                    <Typography sx={{p: 1}}>
                        <li>基本情報技術者</li>
                        <li>応用情報技術者</li>
                        <li>情報処理安全確保支援士(非登録)</li>
                        <li>AWS Cloud Practitioner</li>
                        <li>MuleSoft Certified Developer Level 1</li>
                    </Typography>

                <Typography variant='h6' className='subheading'>開発経験</Typography>
                <Typography sx={{p: 1}}>
                    <li>C/C++</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>Swift / Storyboard</li>
                    <li>Javascript</li>
                    <li>TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Flutter</li>
                </Typography>


            </Box>

            <Box sx={{p: 2}}>
                <Typography variant='h5' className='heading'>Git Hub</Typography>
                <Typography sx={{p: 1}}>
                    <Link to="https://github.com/TakenoriYasugi/">TakenoriYasugi</Link>
                </Typography>
            </Box>
        </>
    );
}

export default About