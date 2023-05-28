import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons/'

import { landscapes } from '../data/landscapes'

const OnBoardScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: landscapes[3].imageUrl }}
				style={styles.image}
			/>
			<View style={styles.detailContainer}>
				<View>
					<Text style={styles.title}>Travel Anywhere In The</Text>
					<Text style={styles.title}>World Without Any Hassle</Text>
				</View>
				<View>
					<Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam commodi iure quo facere dolores.</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.skipBtn}>
						<Text>Skip</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.nextBtn}>
						<Text style={styles.btnText}>Next</Text>
						<MaterialCommunityIcons
							name='arrow-right-thin'
							size={24}
							color='#fff'
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default OnBoardScreen

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
	},
	image: {
		flex: 2,
		width: '100%',
		alignSelf: 'center',
		marginTop: 45,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	detailContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
		gap: 10,
	},
	title: {
		fontWeight: '800',
		fontSize: 22,
		color: '#36454f',
		textAlign: 'center',
	},
	subTitle: {
		color: '#708090',
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30,
	},
	skipBtn: {
		backgroundColor: '#f7f7f7',
		padding: 20,
		width: '40%',
		borderRadius: 100,
		alignItems: 'center',
	},
	nextBtn: {
		backgroundColor: '#428bca',
		padding: 20,
		width: '40%',
		borderRadius: 100,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	btnText: {
		color: '#ffffff',
		marginRight: 5,
	},
})
