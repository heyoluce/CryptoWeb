import { Flex, Typography } from 'antd';

export default function CoinInfo({coin, withSymbol}) {
    return (   <Flex align="center">
    <img src={coin.icon} alt={coin.name} style={{ marginRight: 15, width: 40 }} />
    <Typography.Title level={2} style={{ margin: 0, marginRight: 10 }}>
       {withSymbol && '(' + coin.symbol + ')'}  {coin.name}
    </Typography.Title>
</Flex>
    );
}