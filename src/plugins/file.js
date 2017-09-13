/**
 * @module File
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class File {
    /**
     * Plugin constructor
     * @param  {Object} options
     * @return {this}
     */
    constructor(options) {
        if(!options.element) {
            throw new Error('[BulmaJS] The file component requires an element to function.');
        }

        /**
         * The root file element.
         * @type {HTMLElement}
         */
        this.root = options.element;

        /**
         * The element to use as the trigger.
         * @type {HTMLELement}
         */
        this.trigger = this.root.querySelector('input');

        /**
         * The element to show the file name.
         * @type {HTMLElement}
         */
        this.target = this.root.querySelector('.file-name');

        this.registerEvents();
    }

    /**
     * Register all the events this module needs.
     */
    registerEvents() {
        this.trigger.addEventListener('change', this.handleTriggerChange.bind(this));
    }

    /**
     * Handle the click event on the trigger.
     * @param  {Object} event
     */
    handleTriggerChange(event) {
        if(event.target.files.length === 0) {
            this.clearFileName();
        }

        if(event.target.files.length === 1) {
            this.setFileName(event.target.files[0].name);
        }

        if(event.target.files.length > 1) {
            this.setFileName(event.target.files.length + ' files');
        }
    }

    /**
     * Clear the file name element.
     */
    clearFileName() {
        this.target.innerHTML = '';
    }

    /**
     * Set the text for the file name element.
     * @param {string} value
     */
    setFileName(value) {
        this.target.innerHTML = value;
    }

    /**
     * Handle parsing the DOMs data attribute API.
     */
    static handleDomParsing(element) {
        new File({
            element: element
        });
    }
}

export default File;