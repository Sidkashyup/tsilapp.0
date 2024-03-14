import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function AboutUs() {
  return (
    <LinearGradient
      colors={['white', '#66bb6a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.contentContainer}>
        <View style={styles.innerContent}>
          <Text
            style={[
              styles.heading,
              {
                fontSize: 24,
                fontWeight: 'bold',
                color: '#66bb6a',
                marginBottom: 10,
                textAlign: 'center',
              },
            ]}>
            About Us
          </Text>
          <View
            style={{
              borderWidth: 2,
              width: 50,
              borderColor: '#66bb6a',
              marginBottom: 20,
            }}></View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.paragraph}>
              <Text>
                Transvue Solution Software is a forward-thinking technology
                company dedicated to revolutionizing the transportation sector.
                Our mission is to provide comprehensive system support for
                #66bb6aEco, a cutting-edge initiative aimed at minimizing
                paperwork and maximizing efficiency. With a strong focus on
                digital solutions, we empower our clients to streamline their
                processes while prioritizing environmental sustainability.
                Through innovative software solutions and strategic
                partnerships, we are driving positive change in the industry,
                paving the way for a #66bb6aer and more efficient future.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <Text>
                At Transvue Solution Software, we offer a wide range of digital
                services tailored to meet the specific needs of #66bb6aEco and its
                stakeholders. Our comprehensive suite of tools enables seamless
                management and transfer of paperwork associated with
                transporting goods. From electronic documentation and digital
                signatures to real-time tracking and analytics, our software
                facilitates the transition from outdated paper-based systems to
                efficient digital formats. By leveraging the latest
                technologies, we help our clients reduce time, resources, and
                environmental impact, while enhancing overall operational
                efficiency and compliance.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <Text>
                Currently, Transvue Solution Software serves a diverse clientele
                base, with numerous clients utilizing our services for their
                transportation paperwork management needs. The types of users
                currently benefiting from our services include government
                entities involved in the transportation sector, as well as
                drivers tasked with transferring port-related goods for clients.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    height: '95%',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  innerContent: {
    backgroundColor: 'white',
    width: '90%',
    height: '95%',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#68D391',
    marginBottom: 10,
  },
  divider: {
    borderWidth: 2,
    width: 10,
    borderColor: '#68D391',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  paragraph: {
    backgroundColor: '#E2E8F0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default AboutUs;
