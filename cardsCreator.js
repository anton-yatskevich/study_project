const cardImgs = [
	'https://cdn.comparecards.com/uploads/images/items/3402.png',
	'https://d31s10tn3clc14.cloudfront.net/imgs/card_imgs/1002001v3.png',
	'https://www.icicibank.com/managed-assets/images/credit-card-calculator/card-type/Lifestyle/platinum%20chip/icici-platinum-chip-card.png',
	'https://crdbbank.co.tz/wp-content/uploads/2018/02/card.png',
	'https://www.lhv.ee/assets/images/cards/partnerDebit.png',
	'http://info.westpac.com.au/creditcards/assets/images/55day_Classic_VISA_PayWave_exp-0000.png',
	'https://cdn.thesimpledollar.com/wp-content/uploads/2018/01/First-Progress-Platinum-Prestige-MasterCard%C2%AE-Secured-Credit-Card.png',
	'https://www.telegraph.co.uk/content/dam/financial-services/Money%20Comparison/Credit%20Cards/assets/red-credit-card-400_tcm97-55103.png?imwidth=450',
	'https://www.smile.co.uk/assets/ns/smile/img/pattern-library/img-gold-credit-card.png',
];

const cardTypes = [
	'Balance transfer',
	'Purchase',
	'Spend abroad',
];

const createCards = (images, types, amount) => {
	const cards = [];
	let i = 1;

	for (i; i <= amount; i += 1) {
		const imageId = Math.floor(Math.random() * images.length);
		const typeId = Math.floor(Math.random() * types.length);
		const balanceFeeMonths = Math.floor(Math.random() * 12 + 1);
		const balanceFeeAmount = Math.floor(Math.random() * 12 + balanceFeeMonths);
		const costAmount = Math.floor(Math.random() * 100 + 10) * 10;
		const costMonths = Math.floor(Math.random() * 12 + 1);
		const exmpSpend = Math.floor(Math.random() * 100 + 10) * 10;
		const exmpPurchase = Math.floor(Math.random() * 10 + 10) * 10;

		const card = {
			id: `CARD_${i}`,
			name: `BANK_${i}`,
			image: images[imageId],
			type: cardTypes[typeId],
			repayments: {
				balanceFee: {
					amount: balanceFeeAmount,
					months: balanceFeeMonths,
				},
				costToYou: {
					amount: costAmount,
					months: costMonths,
				},
			},
			representativeExmp: {
				spend: exmpSpend,
				purchase: exmpPurchase,
			},
		};
		cards.push(card);
	}
	return cards;
};

const cards = createCards(cardImgs, cardTypes, 30);

module.exports = cards;
