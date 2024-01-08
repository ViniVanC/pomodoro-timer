import { Center, Modal, Pressable, Text } from "native-base";
import Markdown from "react-native-simple-markdown";

export const HelpModal = ({ showModal, setShowModal }) => {
  return (
    <Center>
      <Modal
        size={"xl"}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          bg: "#1b1105",
        }}
      >
        <Modal.Content bg={"#1b1105"}>
          <Modal.Header
            bg={"#1b1105"}
            flexDirection={"row"}
            alignItems={"center"}
            borderBottomWidth={0}
            px={"10px"}
            py={"5px"}
          >
            <Text
              flex={1}
              fontFamily={"FiraCode_700Bold"}
              color={"#FFBE26"}
              fontSize={"25px"}
              lineHeight={"xs"}
              style={styles.textShadow}
            >
              Info
            </Text>
            <Pressable
              _pressed={{ transform: [{ scale: 0.9 }] }}
              onPress={() => setShowModal(false)}
            >
              <Text
                flex={1}
                fontFamily={"FiraCode_400Regular"}
                color={"#FFBE26"}
                fontSize={"18px"}
                textAlign={"left"}
                style={styles.textShadow}
              >
                ✖
              </Text>
            </Pressable>
          </Modal.Header>
          <Modal.Body>
            <Markdown styles={markdownStyles}>
              {`##Суть техніки Pomodoro 

**Техніка Pomodoro** - це метод ефективності та управління часом, розроблений **Франческо Чірілло** в 1980-х роках. Основна ідея полягає в розбитті робочого часу на короткі інтервали, називані **"помідорами"**, за якими слідує короткий перерви. Зазвичай це виглядає так:
`}
            </Markdown>
            <Markdown styles={markdownStyles}>
              1. 25 хвилинний "помідор": Фокусуйтеся на роботі протягом 25
              хвилин (одного "помідора").{"\n"}2. 5-хвилинна перерва: Після
              завершення "помідора" робіть коротку перерву, приблизно 5 хвилин.{" "}
              {"\n"}3. Повторіть цикл: Після кожного четвертого "помідора"
              зробіть довшу перерву, наприклад, 15 хвилин.
            </Markdown>
            <Markdown styles={markdownStyles}>
              {`Основна ідея полягає в тому, що час роботи обмежений, а перерви допомагають уникнути втоми та підтримують концентрацію. При використанні цієї техніки люди частіше досягають великого обсягу роботи та підвищують продуктивність.
              `}
            </Markdown>
            <Markdown styles={markdownStyles}>
              {`## Повідомлення від розробника

Цей додаток було розроблено на колінці з бюджетом в пачку мівіни та три пакетики чаю. 

Я хотів зробити щось подібне на **ретро ПК**, і результат роботи мене цілком влаштовує. Загалом версія **1.0.0** має весь базовий функціонал. У подальших версіях будуть додаватись нові штуки, для поліпшення користувацького досвіду.

### Контакти

- inst: [vini](https://www.instagram.com/vi.ni_van?igsh=MmVlMjlkMTBhMg==)
- email: [Vincent Van](mailto:vincentvan0302@gmail.com)
- github: [ViniVanC](https://www.github.com/ViniVanC)`}
            </Markdown>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const styles = {
  textShadow: {
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
};

const markdownStyles = {
  del: {
    textDecorationLine: "line-through",
  },
  heading: {
    fontFamily: "FiraCode_700Bold",
    marginBottom: 15,
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
  heading1: {
    fontSize: 22,
  },
  heading2: {
    fontSize: 20,
  },
  heading3: {
    fontSize: 18,
  },
  link: {
    textDecorationLine: "underline",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    color: "#FFBE26",
    marginBottom: 5,
    paddingRight: 10,
  },
  listItemBullet: {
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
    fontSize: 18,
  },
  listItemNumber: {
    fontFamily: "FiraCode_700Bold",
    flexWrap: "wrap",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
  listItemText: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.4,
  },
  paragraph: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  strong: {
    fontFamily: "FiraCode_700Bold",
  },
  text: {
    fontFamily: "FiraCode_400Regular",
    color: "#FFBE26",
    textShadowColor: "#FFBE26",
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10, // Додає тінь (для Android)
    opacity: 0.6,
  },
};
