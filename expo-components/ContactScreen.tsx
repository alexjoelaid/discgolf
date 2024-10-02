import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Your contacts</Text>
      {contacts.map((contact, index) => (
        <Text key={index}>{contact.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
