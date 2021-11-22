import * as React from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import { themr } from '@friendsofreactjs/react-css-themr';

// @ts-ignore
import style from './RangeEditor.css';

interface RangeEditorProps {
    theme?: Record<string, string>;
    value?: string;
    commit: (value: any) => void;
    options: {
        min?: number;
        max?: number;
        step?: number;
        unit?: string;
    };
}

class RangeEditor extends React.PureComponent<RangeEditorProps> {
    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        theme: PropTypes.object,
        options: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
            step: PropTypes.number,
            unit: PropTypes.string,
        }),
    };

    static defaultProps = {
        options: {
            min: 0,
            max: 100,
            step: 1,
            unit: '',
        },
    };

    state = {
        value: 0,
    };

    componentDidMount() {
        this.setState({ value: this.props.value });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { options } = this.props;
        const { target } = event;

        let value = parseInt(target.value || target.innerText);
        if (isNaN(value)) return;

        value = Math.min(options.max, Math.max(options.min, value));

        this.setState({ value });
        this.props.commit(value);

        this.forceUpdate();
    };

    onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (isNaN(event.key as unknown as number)) event.preventDefault();
    };

    render() {
        const { options, theme } = this.props;
        const { value } = this.state;

        return (
            <div className={theme.rangeEditor}>
                <input
                    type="range"
                    min={options.min}
                    max={options.max}
                    step={options.step}
                    value={value}
                    className="slider"
                    onChange={this.handleChange}
                />
                <div className={theme.rangeEditorValue}>
                    <span title="Minimum">
                        {options.min}
                        {options.unit}
                    </span>
                    <span>
                        <input
                            title="Current value"
                            type="text"
                            onKeyPress={this.onKeyPress}
                            onChange={this.handleChange}
                            value={value}
                            style={{ width: `${options.max.toString().length}ch` }}
                        />
                        {options.unit}
                    </span>
                    <span title="Maximum">
                        {options.max}
                        {options.unit}
                    </span>
                </div>
            </div>
        );
    }
}

export default themr('shel-neos-rangeeditor/rangeEditor', style)(RangeEditor);
