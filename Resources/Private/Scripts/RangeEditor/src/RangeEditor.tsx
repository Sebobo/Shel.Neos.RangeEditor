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
        minLabel?: string;
        maxLabel?: string;
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
            minLabel: PropTypes.string,
            maxLabel: PropTypes.string,
        }),
    };

    static defaultProps = {
        options: {
            min: 0,
            max: 100,
            step: 1,
            unit: '',
            minLabel: null,
            maxLabel: null,
        },
    };

    state = {
        value: 0,
    };

    editableRef = null;

    constructor(props) {
        super(props);
        this.editableRef = React.createRef();
    }

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

        this.editableRef.current.innerText = value;

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
                        {options.minLabel ? options.minLabel : options.min + options.unit}
                    </span>
                    <span>
                        <span
                            title="Current value"
                            ref={this.editableRef}
                            role="textbox"
                            contentEditable
                            onKeyPress={this.onKeyPress}
                            onInput={this.handleChange}
                        >
                            {value}
                        </span>
                        {options.unit}
                    </span>
                    <span title="Maximum">
                        {options.maxLabel ? options.maxLabel : options.max + options.unit}
                    </span>
                </div>
            </div>
        );
    }
}

export default themr('shel-neos-rangeeditor/rangeEditor', style)(RangeEditor);
