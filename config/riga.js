import SiteConfig from './utils';

export default new SiteConfig('riga', {
    title: 'Рига',
    phone: '+7 (495) 432-13-13',
    whatsapp: '79269764000',
    email: 'info@riga.ru',
    domain: 'riga.ru',
    routes: ['Новорижское'],
    meta: {
        title: 'Дома и коттеджи на Рублевке. Недвижимость на Рублево-Успенском шоссе.',
        description:
            'Большой выбор домов и коттеджей на Рублевке. Более 200 поселков и тысячи предложений по продаже или аренде домов на Рублево-Успенском шоссе.',
    },
    popularSettlements: [
        [408, 'Ренессанс Парк'],
        [368, 'Миллениум Парк'],
        [362, 'Гринфилд'],
        [391, 'Мэдисон парк'],
        [363, 'Шервуд'],
        [392, 'Монтевиль'],
        [373, 'Риверсайд'],
        [357, 'Никольская слобода'],
        [371, 'Павлово-2'],
        [361, 'Княжье озеро'],
    ],
    cdnWatermarkUUID: '65a3e839-d8bf-4704-bc08-e694908e458c',
});
