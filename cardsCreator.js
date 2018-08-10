const cardImgs = [
    'https://www.google.by/imgres?imgurl=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fcredit-card-png-credit-card-png-image-708.png&imgrefurl=http%3A%2F%2Fpluspng.com%2Fcredit-card-png-1224.html&docid=ETV4nQOfqBTDIM&tbnid=E_2iNtmJeKIR4M%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwg9KAowCg..i&w=708&h=447&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwg9KAowCg&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fgobear0ph0prod.blob.core.windows.net%2Fgobear%2FMedia%2Fblog-inserts%2FCredit-card-images-280x165%2FBPI-blue-mastercard_280x165.png&imgrefurl=https%3A%2F%2Fwww.gobear.com%2Fph%2Fblog%2Ftop-6-credit-cards-for-first-timers&docid=4JyQmQYb1hihBM&tbnid=_GMgnQSoIZn4zM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhAKA0wDQ..i&w=280&h=165&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhAKA0wDQ&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.visa.co.in%2Fpay-with-visa%2Ffind-a-card%2Fcredit-cards%2F_jcr_content%2Fpar%2Fcardstack_2f1d%2FcardStackColumn3%2Fimage_981b.img.png%2F1499676025164.png&imgrefurl=https%3A%2F%2Fwww.visa.co.in%2Fpay-with-visa%2Ffind-a-card%2Fcredit-cards.html&docid=adKh3tL6cvdpAM&tbnid=DGMHiSgtJM4GCM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhRKBQwFA..i&w=498&h=280&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhRKBQwFA&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.imbank.com%2Frwanda%2Fwp-content%2Fuploads%2F2014%2F08%2Fgold-credit-card-Recovered.png&imgrefurl=https%3A%2F%2Fwww.imbank.com%2Frwanda%2Fcards%2Fvisa-credit-gold%2F&docid=CIql9oZnaHtCYM&tbnid=Xo3qelgL8hgf5M%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhZKBwwHA..i&w=1136&h=775&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhZKBwwHA&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=http%3A%2F%2Finfo.westpac.com.au%2Fcreditcards%2Fassets%2Fimages%2F55day_Classic_VISA_PayWave_exp-0000.png&imgrefurl=http%3A%2F%2Finfo.westpac.com.au%2Fcreditcards%2F55platinum%2F&docid=18ufQEYvVhBZtM&tbnid=QsrAj_M7rjjeRM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhaKB0wHQ..i&w=1000&h=632&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhaKB0wHQ&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.cashoverflow.in%2Fwp-content%2Fuploads%2F2016%2F05%2FStandard-Chartered-Platinum-Credit-Card.png&imgrefurl=https%3A%2F%2Fwww.cashoverflow.in%2Fbest-credit-card-no-annual-fee-india%2F&docid=tiALreBpMMpsLM&tbnid=n3FXaHn7GlOqsM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhvKDIwMg..i&w=330&h=213&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwhvKDIwMg&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fcdn.thesimpledollar.com%2Fwp-content%2Fuploads%2F2018%2F01%2FFirst-Progress-Platinum-Prestige-MasterCard%25C2%25AE-Secured-Credit-Card.png&imgrefurl=https%3A%2F%2Fwww.thesimpledollar.com%2Fbest-secured-credit-card%2F&docid=6yi4n4htK8fxHM&tbnid=MVmARYpBKc4TkM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwh5KDwwPA..i&w=500&h=315&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwh5KDwwPA&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2Ffinancial-services%2FMoney%2520Comparison%2FCredit%2520Cards%2Fassets%2Fred-credit-card-400_tcm97-55103.png%3Fimwidth%3D450&imgrefurl=https%3A%2F%2Fwww.telegraph.co.uk%2Ffinancial-services%2Fmoney-comparison%2Fcredit-cards%2Fvirgin-money-40-month-balance-transfer-credit-card%2F&docid=lXRSHdPYM98mbM&tbnid=GUjWwUMpOW60zM%3A&vet=10ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwiZAShcMFw..i&w=400&h=252&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=0ahUKEwjw7qrM_uHcAhUCmrQKHQaUBKsQMwiZAShcMFw&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.regionalaustraliabank.com.au%2Fpersonal%2Fproducts%2Furl(%27%2F-%2Fmedia%2FCommunityMutual%2FImages%2FContent%2FProducts%2FCards%2FYour_Choice_Visa.png%27)&imgrefurl=https%3A%2F%2Fwww.regionalaustraliabank.com.au%2Fpersonal%2Fproducts%2Fcredit-cards&docid=PbdfLiWQf6M5qM&tbnid=_RZS4pYMpwWf_M%3A&vet=12ahUKEwjY_KOQ_-HcAhWHY1AKHXmqDkc4ZBAzKAYwBnoECAEQBw..i&w=387&h=263&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=2ahUKEwjY_KOQ_-HcAhWHY1AKHXmqDkc4ZBAzKAYwBnoECAEQBw&iact=mrc&uact=8',
    'https://www.google.by/imgres?imgurl=https%3A%2F%2Fwww.smile.co.uk%2Fassets%2Fns%2Fsmile%2Fimg%2Fpattern-library%2Fimg-gold-credit-card.png&imgrefurl=http%3A%2F%2Fwww.smile.co.uk%2Fcreditcards&docid=Ndof9zdWM9cvrM&tbnid=Z9uVSgA1dvKFVM%3A&vet=12ahUKEwjY_KOQ_-HcAhWHY1AKHXmqDkc4ZBAzKAMwA3oECAEQBA..i&w=370&h=235&bih=925&biw=1920&q=credit%20cards%20images%20png&ved=2ahUKEwjY_KOQ_-HcAhWHY1AKHXmqDkc4ZBAzKAMwA3oECAEQBA&iact=mrc&uact=8'    
];

const cardTypes = [
    'Balance transfer',
    'Purchase',
    'Spend abroad',
];

const createCards = (images, types, amount) => {
    const cards = [];
    let i = 1;

    for (i; i <= amount; i++) {
        let imageId = Math.floor(Math.random() * images.length);
        let typeId =  Math.floor(Math.random() * types.length);
        let balanceFeeMonths = Math.floor(Math.random() * 12 + 1);
        let balanceFeeAmount = Math.floor(Math.random() * 12 + balanceFeeMonths);
        let costAmount = Math.floor(Math.random() * 100 + 10) * 10;
        let costMonths = Math.floor(Math.random() * 12 + 1);
        let exmpSpend = Math.floor(Math.random() * 100 + 10) * 10;
        let exmpPurchase = Math.floor(Math.random() * 10 + 10) * 10;

        let card = {
            id: `CARD_${i}`,
            name: `BANK_${i}`,
            image: images[imageId],
            type: typeId,
            repayments: {
                balanceFee: {
                    amount: balanceFeeAmount,
                    months: balanceFeeMonths
                },
                costToYou: {
                    amount: costAmount,
                    months: costMonths
                }
            },
            representativeExmp: {
                spend: exmpSpend,
                purchase: exmpPurchase
            }
        }
        cards.push(card);
    } 
       
    return cards;
} 


const cards = createCards(cardImgs, cardTypes, 30);

module.exports = cards;