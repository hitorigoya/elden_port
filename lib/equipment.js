const equipment = [
    {
        id: 1,
        name: "木の棍棒",
        text: "切り出した木にトゲを付けた粗雑な武器\n勢いのままに叩きつけるだけでそれなりの威力がある",
        img: "/img/equipment/woodclub.png"
    },
    {
        id: 2,
        name: "石の斧",
        text: "棒に石をくくりつけた簡素な斧\nよく研がれていて武器としても道具としても使える",
        img: "/img/equipment/stone-axe.png"
    },
    {
        id: 3,
        name: "骨のナイフ",
        text: "骨を削り出しただけのシンプルなナイフ\n骨の主が人か獣かは分からない",
        img: "/img/equipment/bone-knife.png"
    },
    {
        id: 4,
        name: "松明",
        text: "周囲を明るく照らす夜には必須の道具\n振り回して武器として使うこともできる",
        img: "/img/equipment/primitive-torch.png"
    },
    {
        id: 5,
        name: "赤石の首飾り",
        text: "大きな赤い鉱石の首飾り\n目覚めた時に握りしめられていたもの\n昔、大切な人に貰ったような気がするが思い出せないという",
        img: "/img/equipment/gem-chain.png"
    },
    {
        id: 6,
        name: "クロスボウ",
        text: "台座に弓を固定した引き金式の遠距離武器\n威力は高いが再装填に時間がかかる",
        img: "/img/equipment/crossbow.png"
    },
    {
        id: 7,
        name: "石のボルト",
        text: "クロスボウ用の石のボルト\n簡単に作れるがダメージにブレがある",
        img: "/img/equipment/stone-spear.png"
    },
    {
        id: 8,
        name: "革の兜",
        text: "皮革で作られた軽量な兜\nそれなりに耐久度もあり広く使われている",
        img: "/img/equipment/light-helm.png"
    },
    {
        id: 9,
        name: "革の鎧",
        text: "皮革で作られた軽量な鎧\nそれなりに耐久度もあり広く使われている",
        img: "/img/equipment/leather-armor.png"
    },
    {
        id: 10,
        name: "ガントレット",
        text: "騎士のために作られた鉄製の頑丈な手甲\n食事の時には外したほうがいいだろう",
        img: "/img/equipment/gauntlet.png"
    },
    {
        id: 11,
        name: "革の靴",
        text: "皮革で作られた軽量な靴\nそれなりに耐久度もあり広く使われている",
        img: "/img/equipment/leather-boot.png"
    },
    {
        id: 12,
        name: "世界樹の聖印",
        text: "世界樹への祈りを力に変える幻影の聖印\n遥か昔、人々は神に近かった\nしかし今の時代には、信仰は無用の長物だろう",
        img: "/img/equipment/iron-cross.png"
    },
    {
        id: 13,
        name: "獣牙の首飾り",
        text: "獣の牙を連ねた首飾り\nこれを持つのは牙をなくした人間の、獣への憧れからだろうか",
        img: "/img/equipment/primitive-necklace.png"
    },
    {
        id: 14,
        name: "ほうき星の首飾り",
        text: "様々な天然石を連ねた首飾り\n魔法全般への耐性が上昇する",
        img: "/img/equipment/prayer-beads.png"
    },
    {
        id: 15,
        name: "火の刻印",
        text: "体に刻み込まれた火の輪\n死んでも外すことはできない",
        img: "/img/equipment/fire-ring.png"
    },
    {
        id: 16,
        name: "盾のタリスマン",
        text: "盾を象った銀のタリスマン\n強く握りしめると勇気が湧くという",
        img: "/img/equipment/templar-shield.png"
    },
    {
        id: 17,
        name: "恵みの小瓶",
        text: "世界樹から分け与えられた恵みの雫\nHPを回復する",
        img: "/img/item/drink-me.png"
    },
    {
        id: 18,
        name: "ランタン",
        text: "永遠に消えない火を封じ込めたランタン\n人間はもう火のない時代には戻れない",
        img: "/img/item/lantern-flame.png"
    },
    {
        id: 19,
        name: "スイートレーズン",
        text: "美味しい干し葡萄\n長期保存にも適した旅のお供",
        img: "/img/item/berries-bowl.png",
    },
    {
        id: 20,
        name: "スイートコーン",
        text: "シャキシャキのトウモロコシ\nこれを食べている間はどんな人間でも幸せになれるだろう",
        img: "/img/item/corn.png",
    },
    {
        id: 21,
        name: "ゴースト",
        text: "主人公に従う影の魔物\n敵と目が合うと逃げていく",
        img: "/img/servant/ghost.png",
    },
    {
        id: 22,
        name: "イフリート",
        text: "主人公に従う影の魔物\n炎の魔法に長けるが、足が無いので召喚された場所から動く事ができない",
        img: "/img/servant/ifrit.png",
    },
    {
        id: 23,
        name: "ウェアウルフ",
        text: "主人公に従う影の魔物\n素早い身のこなしで敵を撹乱し、鋭い爪と牙で切り裂く",
        img: "/img/servant/werewolf.png",
    },
    {
        id: 24,
        name: "ケンタウロス",
        text: "主人公に従う影の魔物\n剛弓を使い遠距離から敵を仕留める\nまだ未熟なせいか上半身と下半身で違う動きをする事がある",
        img: "/img/servant/centaur.png",
    },
    {
        id: 25,
        name: "ユニコーン",
        text: "主人公に従う影の魔物\n鋭い角で突進し、しゃくりあげて敵を吹き飛ばす\n主人公が男の場合召喚に応じない",
        img: "/img/servant/unicorn.png",
    },
]

export default equipment