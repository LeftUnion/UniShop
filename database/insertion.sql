INSERT INTO <product_categories>(<field>, <field>) VALUES('string', 200) 'tables';
catalogArr[1] = 'kitchens';
catalogArr[2] = 'beds';
catalogArr[3] = 'sofas';
catalogArr[4] = 'closets';
catalogArr[5] = 'completegoods';

-- insert cathegories
INSERT INTO shop.product_categories(cathegory) VALUES('kitchens');
INSERT INTO shop.product_categories(cathegory) VALUES('beds');
INSERT INTO shop.product_categories(cathegory) VALUES('sofas');
INSERT INTO shop.product_categories(cathegory) VALUES('closets');
INSERT INTO shop.product_categories(cathegory) VALUES('completegoods');
INSERT INTO shop.product_categories(cathegory) VALUES('tables');


-- insert kitchen
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/f67/f67e63b98034ebe823e8c93fe1a48910.jpg', 'Кухонный гарнитур Лина 2 м', 26399, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/508/991/6/86c2c734cc7b86eda4db8ab56dcf7637.jpg/666x444_85.webp', 'Кухонный гарнитур Стелла 2,4 м', 22999 , 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/a56/a5616521c341f483eb8eb16735114fbc.jpg', 'Кухонный гарнитур Лион', 17999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/aa0/aa0f0ca8be4c5c1e5c15914fe8a2d5b9.jpg', 'Кухонный гарнитур Сити 2,4 м', 21999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/39b/39b1031aae0c1cc55d3d5288279c62ad.jpg', 'Кухонный гарнитур КГ-2 2,0 м', 10999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/6d4/6d486039b7ec7963cc8d8928964901d0.jpg', 'Кухонный гарнитур Токио 1,6 м', 10499, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/799/7993cae02162e82c3e3dc59ea145c843.jpg', 'Кухонный гарнитур Белла 2,4 м ', 37999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/360/3601da48ba258ef7f6cdc47569c1ae51.jpg', 'Кухонный гарнитур Токио 1,2 м', 7999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/6e4/6e432bf55b479484a0439431e46bd817.jpg', 'Кухонный гарнитур Эстель 2,4 м', 29999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/69d/69dde8b933874532ab7fbf31fae12994.jpg', 'Кухонный гарнитур Лион 1,8 м', 17999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/e5c/e5cf9fd29b2f7d7f43cef25f7772233d.jpg', 'Кухонный гарнитур Белла 2,4 м', 37999, 1);
INSERT INTO shop.products(src, description, price) VALUES('https://hoff.ru/upload/iblock/bb7/bb74f0580eeadccc6cec84c652fc472a.jpg', 'Кухонный гарнитур Маренго 2,4 м', 38999, 1);

-- insert beds
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/223/107/2/e4148dd6221c472ba8459e9357e140cd.jpg/666x444_85.webp', 'Каркас кровати Соренто 90х200 см ', 4999, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/931/931807c91909077a15cdaa765ddfd5e5.jpg', 'Каркас кровати SOLANA Одри 140х200 см', 11990, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/9bc/9bc97ac526b77c682729b50676404f8f.jpg', 'Кровать с подъёмным механизмом Коста 120х200 см', 25999, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/340/340c6bd660c7f2d7976c8163caeb7901.jpg', 'Кровать без подъемного механизма Лидо 160х200', 7797, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/2fa/2fad5bc032bcec9d7bc2b4583e58a7e0.jpg', 'Кровать без подъемного механизма Лидо с изголовьем с бельевым ящиком 160х200', 10995, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/051/05143bd88a2a1b3e0c6ac2096557286a.jpg', 'Каркас кровати SOLANA Одри 140х200 см', 11990, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/54f/54f6a5bdd1252791551db420e2a3dc99.jpg', 'Каркас кровати SOLANA Одри 140х200 см', 11990, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/04d/04d74d1568f8488b961f29a6b77d635b.jpg', 'Кровать без подъёмного механизма Мета 90х200 см', 4399, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/499/499430e01468280f8b2bd2077f302472.jpg', 'Каркас кровати Астра 90х200 см ', 7999, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/7f9/7f97309115949d786b0bcc0f15abb282.jpg', 'Каркас кровати Глазго 140х200 см', 11999, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/7f9/7f97309115949d786b0bcc0f15abb282.jpg', 'Кровать c подъёмным механизмом Вена 160х200 см', 28398, 2);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/53c/53c0b31334931462950889f3a5524e9e.jpg', 'Кровать без подъёмного механизма Сеул 180х200 см', 103499, 2);

-- insert sofas
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/23e/23e5cb2da18307b1c9b184c6541bc0bd.jpg', 'Диван офисный Бит ', 17999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/11f/11fe23ae887bf54a6a7576598989cba8.jpg', 'Диван-кровать Фьорд', 55399, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/449/864/6/4d866970f2b2f2e343194aec8e783283.jpg/666x444_85.webp', 'Диван-кровать Парма', 10999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/c2d/c2d169860bce5ea5e98f2d0fdea2ce77.jpg', 'Диван-кровать Атланта', 15999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/485/504/9/4d677ebfe5ff59182ac616f1789bb52c.jpg/666x444_85.webp', 'Угловой диван-кровать Слим', 25999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/e0f/e0f59682bd46be48007651b565fb0625.jpg', 'Угловой диван-кровать Торонто', 19999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/0fe/0fea7b79e9be3be1fdeebdf998c8aedb.jpg', 'Диван-кровать Малага ', 12999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/432/439/2/c6a978fceb3df711b86df3982ec78951.jpg/666x444_85.webp', 'Диван-кровать Дубай', 19999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/544/5442cb9fd5fb79b9572eb2f6f3220245.jpg', 'Угловой диван-кровать Поло', 22999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/24e/24e4747506c1af37d5f6a2f1ca24aec0.jpg', 'Диван-кровать Уно', 16999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/ddf/ddf4d6a7dda36a4323d93add2a7411c5.jpg', 'Диван-кровать Мартин ', 34999, 3);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/fda/fda911e57259d0dd0922d452f9867e31.jpg', 'Диван-кровать Куба', 7999, 3);

-- insert closets
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/1cb/1cbe168a80406d95a5b8460ea57074c8.jpg', 'Шкаф комбинированный Витра', 6999, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33f/33f0aad0c9d5df9c6b929aae2cc78ff3.jpg', 'Шкаф Форте', 14999, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/34e/34e46d368d4e17818d8689d5cb97e793.jpg', 'Шкаф 1-дверный Titus Оскар 50х236 см белый', 11956, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/111/111aa92b465a2aad238fb1076899ecbc.jpg', 'Гардеробная система Titus Оскар белая, серый пыльный глянец ', 133233, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/455/150/3/13c83a2735f5eff2d70dcb0aa33e341a.jpg/666x444_85.webp', 'Шкаф-витрина Blijburg ', 120999, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/455/157/6/0d8e4b0b680cf5f5f2f4ac63f2ce5a31.jpg/666x444_85.webp', 'Шкаф Blijburg', 115999, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/f17/f17f6eba74bdf8a7e7241eade56bb1a7.jpg', 'Шкаф 3-створчатый Wood', 96899, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/11a/11aca87b5018887a580e79586fba7a0f.jpg', 'Шкаф трёхстворчатый Elit', 98899, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/192/19204a9e3ccc2aae28b1f6ea6a9f3651.jpg', 'Шкаф-купе 3-дверный Comet 300х240 см бетон светлый, фасады чёрное стекло', 96393, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/107/1079087e74e36ccee13c04d15b8ce573.jpg', 'Шкаф-купе 3-дверный Comet 300х240 см бетон светлый, фасады белое стекло ', 96393, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/010/0100537746898577c5c2c9d424600026.jpg', 'Шкаф-купе 3-дверный Comet 300х240 см дуб крафт табачный, фасады белое стекло', 96393, 4);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33b/33bdd4f4b295ad6471f154ff6bcbebb3.jpg', 'Шкаф 3-створчатый Classic', 94899, 4);

-- insert completegoods
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33b/33bdd4f4b295ad6471f154ff6bcbebb3.jpg', 'Шкаф 3-створчатый Classic', 94899, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/fda/fda911e57259d0dd0922d452f9867e31.jpg', 'Диван-кровать Куба', 7999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33f/33f0aad0c9d5df9c6b929aae2cc78ff3.jpg', 'Шкаф Форте', 14999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/ddf/ddf4d6a7dda36a4323d93add2a7411c5.jpg', 'Диван-кровать Мартин ', 34999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/2fa/2fad5bc032bcec9d7bc2b4583e58a7e0.jpg', 'Кровать без подъемного механизма Лидо с изголовьем с бельевым ящиком 160х200', 10995, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/499/499430e01468280f8b2bd2077f302472.jpg', 'Каркас кровати Астра 90х200 см ', 7999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/a56/a5616521c341f483eb8eb16735114fbc.jpg', 'Кухонный гарнитур Лион', 17999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/aa0/aa0f0ca8be4c5c1e5c15914fe8a2d5b9.jpg', 'Кухонный гарнитур Сити 2,4 м', 21999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/04d/04d74d1568f8488b961f29a6b77d635b.jpg', 'Кровать без подъёмного механизма Мета 90х200 см', 4399, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/f67/f67e63b98034ebe823e8c93fe1a48910.jpg', 'Кухонный гарнитур Лина 2 м', 26399, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/23e/23e5cb2da18307b1c9b184c6541bc0bd.jpg', 'Диван офисный Бит ', 17999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/11f/11fe23ae887bf54a6a7576598989cba8.jpg', 'Диван-кровать Фьорд', 55399, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33b/33bdd4f4b295ad6471f154ff6bcbebb3.jpg', 'Шкаф 3-створчатый Classic', 94899, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/fda/fda911e57259d0dd0922d452f9867e31.jpg', 'Диван-кровать Куба', 7999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/33f/33f0aad0c9d5df9c6b929aae2cc78ff3.jpg', 'Шкаф Форте', 14999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/ddf/ddf4d6a7dda36a4323d93add2a7411c5.jpg', 'Диван-кровать Мартин ', 34999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/2fa/2fad5bc032bcec9d7bc2b4583e58a7e0.jpg', 'Кровать без подъемного механизма Лидо с изголовьем с бельевым ящиком 160х200', 10995, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/499/499430e01468280f8b2bd2077f302472.jpg', 'Каркас кровати Астра 90х200 см ', 7999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/a56/a5616521c341f483eb8eb16735114fbc.jpg', 'Кухонный гарнитур Лион', 17999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/aa0/aa0f0ca8be4c5c1e5c15914fe8a2d5b9.jpg', 'Кухонный гарнитур Сити 2,4 м', 21999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/04d/04d74d1568f8488b961f29a6b77d635b.jpg', 'Кровать без подъёмного механизма Мета 90х200 см', 4399, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/f67/f67e63b98034ebe823e8c93fe1a48910.jpg', 'Кухонный гарнитур Лина 2 м', 26399, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/23e/23e5cb2da18307b1c9b184c6541bc0bd.jpg', 'Диван офисный Бит ', 17999, 5);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/11f/11fe23ae887bf54a6a7576598989cba8.jpg', 'Диван-кровать Фьорд', 55399, 5);

--insert tables
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/aad/aad2999c64ff84d178249c3edd88170c.jpg', 'Стол обеденный Артизан раздвижной', 119999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/849/062/e1c562d948f7b96ba9eb12b21d128831.jpg/666x444_85.webp', 'Кухонный стол раздвижной Гранд ', 113999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/89f/89f8cc29504e52229c248832023a9167.jpg', 'Журнальный стол 13RXCT8012', 100599, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/a7d/a7d71d08575a0b7adf38356b994df381.jpg', 'Стол обеденный Альянс раздвижной', 99999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/d76/d7678ede9c05417ee61eaf74a80b3580.jpg', 'Стол обеденный Аврора ', 99999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/181/059/d59a4d00306d5b0d7e27b06d6702c72d.jpg/666x444_85.webp', 'Кухонный стол раздвижной Blijburg', 98999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/fed/fed77417096760e4d4d0926836ccc659.jpg', 'Стол обеденный Пандора раздвижной', 95999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/d63/d63e3bc9872deb825c5ae4acf7a40814.jpg', 'Стол обеденный Элиот раздвижной', 73999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/e66/e665535dcc03234896dd743980bcfcdb.jpg', 'Стол обеденный Хлоя раздвижной', 69899, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/01c/01c4b5be2e0350b5fafae3108e0e2a02.jpg', 'Стол Кёльн 3', 68299, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/iblock/27d/27da89b6af492b9a18e6d570e077a846.jpg', 'Стол Гранд-2 раздвижной ', 60999, 6);
INSERT INTO shop.products(src, description, price, product_category_id) VALUES('https://hoff.ru/upload/hoff_resize/hoff-images/333/516/1/b408884ed5c32afc2d0e6ec560aac395.jpg/666x444_85.webp', 'Кухонный стол раздвижной Solomon', 55599, 6);
