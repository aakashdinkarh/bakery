import Card from './Card';

import styles from './styles.module.css';

const dummyData = [
    {
        title: 'Cake 1',
        id: '1',
        url: 'data:image/jpeg;base64,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',
        description: 'Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.'
    },
    {
        title: 'Cake 2',
        id: '2',
        url: 'data:image/jpeg;base64,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',
        description: 'Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.'
    },
    {
        title: 'Cake 3',
        id: '3',
        url: 'data:image/jpeg;base64,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',
        description: 'Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked.'
    },
];

export default function Header() {

    return (
        <div className={styles.header_container}>
            <div className={styles.inner_container}>
                {dummyData.map((item) => <Card key={item.id} item={item} />)}
            </div>
        </div>
    )
}
