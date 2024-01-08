import { Center, Modal, Pressable, Text } from "native-base";

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
            <Text
              fontFamily={"FiraCode_700Bold"}
              color={"#FFBE26"}
              style={styles.textShadow}
            ></Text>
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
