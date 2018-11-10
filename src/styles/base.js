import {StyleSheet, Dimensions} from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
};

export const colors  = {
    primary: '#226B74',
    secondary: '#254B5A',
    tertiary: '#5DA6A7',
    light_gray: '#929292',
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
    sm: 12,
    md: 18,
    md_md: 21,
    lg: 28,
    primary: 'Cochin'
};

const baseStyles = {
    container: {
        paddingHorizontal: padding.sm,
        paddingVertical: padding.lg,
        width: dimensions.fullWidth
    },
    header: {
        backgroundColor: 'transparent',
        fontSize: fonts.lg,
        fontFamily: fonts.primary,
        fontWeight: 'bold'
    },
    section: {
        paddingVertical: padding.lg,
        paddingHorizontal: padding.xl
    },
    textSecondary: {
        color: colors.light_gray,
        fontSize: fonts.md_md,
    },
};

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides})
}