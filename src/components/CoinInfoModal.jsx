import { Divider, Flex, Tag, Typography } from 'antd';
import CoinInfo from './layout/CoinInfo';

export default function CoinInfoModal({ coin }) {
    return (
        <>
           <CoinInfo coin = {coin} withSymbol/>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text stong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
                    {coin.priceChange1h}%
                </Tag>
                <Typography.Text stong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
                    {coin.priceChange1d}%
                </Tag>
                <Typography.Text stong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
                    {coin.priceChange1w}%
                </Tag>
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Typography.Text stong>Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>

           <Typography.Paragraph>
                <Typography.Text stong>Market Cap: </Typography.Text>
                {coin.marketCap}
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Typography.Text stong>Contract Address: </Typography.Text>
                {coin.contractAddress}
            </Typography.Paragraph>
        </>
    )
} 