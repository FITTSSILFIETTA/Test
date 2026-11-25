// БАЗА ЗНАНИЙ ЭНЕРГЕТИКОВ (обновленная)
// Все названия написаны маленькими буквами, как их нужно вводить в админке

const energyDatabase = {
    // --- FLASH UP ---
    "flash up ultra": { brand: "Flash Up", taste: "Ваниль и барбарис", gas: "Средняя", energy: "Бодрит отлично", review: "Очень сладкий, конфетный вкус с кислинкой барбариса." },
    "flash up bubble gum": { brand: "Flash Up", taste: "Бабл-гам", gas: "Средняя", energy: "Средняя", review: "Яркий вкус жвачки." },
    "flash up minty lime": { brand: "Flash Up", taste: "Мята и лайм", gas: "Средняя", energy: "Средняя", review: "Освежающий мятный вкус." },
    "flash up max original": { brand: "Flash Up", taste: "Карамбола и киви", gas: "Средняя", energy: "Средняя", review: "Классический вкус с экзотическими нотками." },
    
    // --- E-ON ---
    "e-on guava passion": { brand: "E-ON", taste: "Гуава и маракуйя", gas: "Средняя", energy: "Хорошо бодрит", review: "Тропический вкус, легкая кислинка." },
    "e-on black power": { brand: "E-ON", taste: "Яблоко и карамель", gas: "Средняя", energy: "Средняя", review: "Кисло-сладкий яблочный вкус." },
    "e-on citrus punch": { brand: "E-ON", taste: "Грейпфрут, апельсин, лимон", gas: "Средняя", energy: "Средняя", review: "Яркий цитрусовый микс." },
    "e-on ginger crush": { brand: "E-ON", taste: "Гранат, клюква, имбирь", gas: "Средняя", energy: "Средняя", review: "Пряный и освежающий вкус." },
    "e-on almond rush": { brand: "E-ON", taste: "Лимон и миндаль", gas: "Средняя", energy: "Средняя", review: "Необычное сочетание цитруса и ореха." },
    "e-on apricot rush": { brand: "E-ON", taste: "Абрикос и миндаль", gas: "Средняя", energy: "Средняя", review: "Сладкий абрикосовый вкус." },
    "e-on pomegranate blast": { brand: "E-ON", taste: "Гранат", gas: "Средняя", energy: "Средняя", review: "Насыщенный ягодный вкус." },
    
    // --- TORNADO ---
    "tornado mango": { brand: "Tornado", taste: "Манго", gas: "Средняя", energy: "Средняя", review: "Сладкий тропический вкус." },
    "tornado watermelon": { brand: "Tornado", taste: "Арбуз", gas: "Средняя", energy: "Средняя", review: "Освежающий арбузный вкус." },
    "tornado coconut": { brand: "Tornado", taste: "Кокос и манго", gas: "Средняя", energy: "Средняя", review: "Тропический коктейль." },
    "tornado razzberry": { brand: "Tornado", taste: "Малина", gas: "Средняя", energy: "Средняя", review: "Ягодный вкус." },
    "tornado banana": { brand: "Tornado", taste: "Банан", gas: "Средняя", energy: "Средняя", review: "Сладкий банановый вкус." },
    "tornado storm": { brand: "Tornado", taste: "Классический", gas: "Средняя", energy: "Средняя", review: "Базовый энергетик." },
    "tornado black": { brand: "Tornado", taste: "Ягодный", gas: "Средняя", energy: "Средняя", review: "Темный ягодный вкус." },
    "tornado iceberry": { brand: "Tornado", taste: "Ледяные ягоды", gas: "Средняя", energy: "Средняя", review: "Освежающий ягодный вкус." },
    "tornado boost": { brand: "Tornado", taste: "Цитрус", gas: "Средняя", energy: "Средняя", review: "Бодрящий цитрус." },
    "tornado green apple": { brand: "Tornado", taste: "Зеленое яблоко", gas: "Средняя", energy: "Средняя", review: "Кисло-сладкое яблоко." },
    "tornado bubble": { brand: "Tornado", taste: "Бабл-гам", gas: "Средняя", energy: "Средняя", review: "Конфетный вкус." },

    // --- WK UP ---
    "wk up zero": { brand: "WK UP", taste: "Кола", gas: "Средняя", energy: "Средняя", review: "Вкус колы, неплохо освежает." },
    "wk up energy": { brand: "WK UP", taste: "Малина, мята, клубничный мохито", gas: "Средняя", energy: "Средняя", review: "Освежающий ягодный микс." },
    "wk up apple": { brand: "WK UP", taste: "Зеленое яблоко", gas: "Средняя", energy: "Средняя", review: "Кисло-сладкий вкус." },
    "wk up watermelon": { brand: "WK UP", taste: "Арбуз", gas: "Средняя", energy: "Средняя", review: "Летний вкус." },
    "wk up pomegranate": { brand: "WK UP", taste: "Гранат", gas: "Средняя", energy: "Средняя", review: "Насыщенный ягодный вкус." },

    // --- TARGET ---
    "target mango": { brand: "Target", taste: "Манго и гуарана", gas: "Средняя", energy: "Средняя", review: "Тропический вкус с бодрящим эффектом." },
    "target zero": { brand: "Target", taste: "Без сахара", gas: "Средняя", energy: "Средняя", review: "Легкий энергетик." },

    // --- SOLAR ---
    "solar energy": { brand: "Solar", taste: "Манго", gas: "Средняя", energy: "Средняя", review: "Сладкий и яркий вкус." },
    "solar pomegranate": { brand: "Solar", taste: "Гранат, клюква, табаско", gas: "Средняя", energy: "Средняя", review: "Пикантный ягодный вкус." },
    "solar tutti frutti": { brand: "Solar", taste: "Тутти-фрутти", gas: "Средняя", energy: "Средняя", review: "Фруктовый микс." },
    "solar lemon": { brand: "Solar", taste: "Лимон, ананас, клубника", gas: "Средняя", energy: "Средняя", review: "Освежающий тропический вкус." },

    // --- HQD ---
    "hqd frost bite": { brand: "HQD", taste: "Ледяной тропик", gas: "Средняя", energy: "Средняя", review: "Освежающий тропический вкус." },
    "hqd cherry bomb": { brand: "HQD", taste: "Вишня", gas: "Средняя", energy: "Средняя", review: "Насыщенный вишневый вкус." },
    "hqd white cherry": { brand: "HQD", taste: "Белая вишня", gas: "Средняя", energy: "Средняя", review: "Нежный вишневый вкус." },
    "hqd raspberry": { brand: "HQD", taste: "Малина", gas: "Средняя", energy: "Средняя", review: "Ягодный вкус." },
    "hqd sour candy": { brand: "HQD", taste: "Кислое драже", gas: "Средняя", energy: "Средняя", review: "Кисло-сладкий вкус." },

    // --- HOTCAT ---
    "hotcat barberry": { brand: "HotCat", taste: "Барбарис", gas: "Средняя", energy: "Средняя", review: "Кисло-сладкий вкус." },
    "hotcat grapefruit": { brand: "HotCat", taste: "Грейпфрут", gas: "Средняя", energy: "Средняя", review: "Цитрусовый вкус." },
    "hotcat multi fruit": { brand: "HotCat", taste: "Мультифрукт", gas: "Средняя", energy: "Средняя", review: "Фруктовый микс." },
    "hotcat cranberry": { brand: "HotCat", taste: "Клюква", gas: "Средняя", energy: "Средняя", review: "Кислый ягодный вкус." },

    // --- JAGUAR ---
    "jaguar extra urban": { brand: "Jaguar", taste: "Киви и кактус", gas: "Средняя", energy: "Средняя", review: "Экзотический вкус." },
    "jaguar wild": { brand: "Jaguar", taste: "Папайя и лайм", gas: "Средняя", energy: "Средняя", review: "Тропический вкус." },

    // --- DRIVE ME ---
    "drive me citrus smash": { brand: "Drive Me", taste: "Цитрус (как Спрайт)", gas: "Средняя", energy: "Средняя", review: "Освежающий цитрус." },
    "drive me original": { brand: "Drive Me", taste: "Классический", gas: "Средняя", energy: "Средняя", review: "Базовый энергетик." },

    // --- PULSE UP ---
    "pulse up prosecco": { brand: "Pulse Up", taste: "Просекко (виноград)", gas: "Средняя", energy: "Средняя", review: "Вкус игристого вина." },
    "pulse up cola": { brand: "Pulse Up", taste: "Кола", gas: "Средняя", energy: "Средняя", review: "Классический вкус колы." },

    // --- SCANDALIST ---
    "the scandalist doomsday machine": { brand: "The Scandalist", taste: "Апельсин и маракуйя", gas: "Средняя", energy: "Средняя", review: "Тропический вкус." },

    // --- КЛАССИКА ---
    "red bull original": { brand: "Red Bull", taste: "Классический", gas: "Сильная", energy: "Бодрит", review: "Легенда." },
    "red bull yellow edition": { brand: "Red Bull", taste: "Тропические фрукты", gas: "Сильная", energy: "Бодрит", review: "Тропический вкус." },
    "monster ultra paradise": { brand: "Monster", taste: "Киви, лайм и огурец", gas: "Средняя", energy: "Хорошая", review: "Освежающий, без сахара." },
    "monster ultra": { brand: "Monster", taste: "Цитрус", gas: "Средняя", energy: "Хорошая", review: "Классика без сахара." },
    "monster mango loco": { brand: "Monster", taste: "Манго", gas: "Средняя", energy: "Хорошая", review: "Очень сладкий и фруктовый." },
    "burn original": { brand: "Burn", taste: "Классический энергетик", gas: "Сильная", energy: "Мощная", review: "Легендарный вкус." },
    "burn mango": { brand: "Burn", taste: "Манго", gas: "Сильная", energy: "Мощная", review: "Сладкий тропический вкус." },
    "burn apple kiwi": { brand: "Burn", taste: "Яблоко и киви", gas: "Сильная", energy: "Мощная", review: "Освежающий фруктовый микс." },
    "adrenaline rush": { brand: "Adrenaline", taste: "Цитрус и женьшень", gas: "Сильная", energy: "Мощная", review: "Крепкий энергетик." },
    "adrenaline rush berry": { brand: "Adrenaline", taste: "Ягодный микс", gas: "Сильная", energy: "Мощная", review: "Ягодный вкус с кислинкой." }
};
