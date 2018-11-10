import {StyleSheet, Dimensions} from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
};

export const colors  = {
    primary: '#BC0000',
    secondary: '#9e1212',
    tertiary: '#d12b2b',
    light_gray: '#929292',
    light_green: '#54c442',
};

export const padding = {
    sm: 10,
    sm_md: 15,
    md: 20,
    md_md: 25,
    lg: 30,
    lg_md: 35,
    xl: 40
};

export const fonts = {
    ex_sm: 8,
    sm: 12,
    md: 18,
    md_md: 21,
    lg: 28,
    ex_lg: 35,
    primary: 'Cochin'
};

const baseStyles = {
    container: {
        paddingHorizontal: padding.sm,
        paddingVertical: padding.lg,
        width: dimensions.fullWidth
    },
    header: {
        backgroundColor: '#BC0000',
        fontSize: fonts.lg,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: '#BC0000',
        fontSize: fonts.lg,
        fontWeight: 'bold',
    },
    section: {
        paddingVertical: padding.lg,
        paddingHorizontal: padding.xl
    },
    textSecondary: {
        color: colors.light_gray,
        fontSize: fonts.md_md,
    },
    textSecondaryMd: {
        color: colors.light_gray,
        fontSize: fonts.md,
        paddingLeft: 7,
    },
    textRanking: {
        color: colors.light_gray,
        fontSize: fonts.ex_lg,
    },
    iconPrimary: {
        color: '#ffffff',
        fontSize: 25,
    },
    backgroundPrimary: {
        backgroundColor: '#BC0000',
    },
    tabStyle: {
        backgroundColor: colors.secondary,
        color: '#fff',
    },
};

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides})
}