import { styled } from "@material-ui/core/styles";
import { compose, spacing, positions } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import MuiGrid from "@material-ui/core/Grid";
import MuiFormControl from '@material-ui/core/FormControl'
import MuiCard from '@material-ui/core/Card'
import MuiTextField from '@material-ui/core/TextField'
import MuiChip from "@material-ui/core/Chip";
/**
 * Applies the spacing system to the material UI Button
 */
export const Button = styled(MuiButton)(compose(spacing, positions));
export const Grid = styled(MuiGrid)(compose(spacing, positions));
export const FormControl = styled(MuiFormControl)(compose(spacing, positions));
export const Card = styled(MuiCard)(compose(spacing, positions));
export const TextField = styled(MuiTextField)(compose(spacing, positions));
export const Chip = styled(MuiChip)(compose(spacing, positions));