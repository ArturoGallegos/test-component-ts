interface Option {
    label: string;
    value: string;
}
interface FakeSelect {
    options: Array<Option>;
    label: string;
    value: Option;
    placeholder: string;
    onChange: Function;
}
declare const FakeSelect: {
    ({ options, label, value, placeholder, onChange }: FakeSelect): JSX.Element;
    defaultProps: {
        options: never[];
        label: string;
        value: boolean;
        placeholder: string;
        onChange: () => void;
    };
    propTypes: {
        options: PropTypes.Validator<object>;
        label: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string | object>;
        placeholder: PropTypes.Requireable<string>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
};
import PropTypes from 'prop-types';
export default FakeSelect;
