<template>
    <div>
        <div class="flex justify-between items-center flex-wrap gap-4">
            <h3 class="heading-primary">
                {{ trans("application.Edit Application") }}
            </h3>

            <tertiary-button class="!px-3 !text-sm "
                             @click.prevent="$emit('create')">
                {{ trans("application.Online Application") }}
            </tertiary-button>
        </div>

        <div class="form-group mt-8">
            <div class="flex pb-1">
                <label-component :value="trans('application.date_of_birth')" class="leading-none"/>
                <div class="custom-tooltip">
                    <svg class="ml-1 mt-1">
                        <use :xlink:href="`${iconLink}ic-info`"/>
                    </svg>
                    <span class="tooltip" v-text="trans('application.form-help-text.dob')"/>
                </div>
            </div>

            <nepali-date-picker v-model="dob" :range="dobRange" :show-labels="false"/>
            <input-error :message="validation().get('dob')"/>
        </div>

        <div class="form-group">
            <label-component :value="trans('application.mobile_number')"/>
            <input-component v-model="mobile_number" type="number"/>
            <input-error :message="validation().get('mobile_number')"/>
        </div>

        <div class="form-group">
            <primary-button :class="{'pointer-events-none' : isSaving}" class="py-3 w-full justify-center mt-2" @click.prevent="handleOnSubmit">
                {{ trans("application.Open Application") }}
            </primary-button>

            <link-button class="w-full justify-center whitespace-pre-line" @click.prevent="$emit('check')">
                {{ trans("application.check_application") }}
            </link-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        LinkButton,
        PrimaryButton,
        TertiaryButton,
    } from "../../../../shared/js/Components/Buttons"
    import {
        InputComponent,
        InputError,
        LabelComponent,
        NepaliDatePicker,
    } from "../../../../shared/js/Components/Forms"

    export default {
        name: "LoginOld",

        components: {
            TertiaryButton,
            PrimaryButton,
            LinkButton,
            InputError,
            LabelComponent,
            InputComponent,
            NepaliDatePicker,
        },

        props: {
            value: { type: Object, required: true },
            isSaving: { type: Boolean, required: true },
            iconLink: { type: String, required: true },
        },

        data: () => ({
            dob: null,
            mobile_number: null,
            dobRange: { ad: [1975, 2004], bs: [2032, 2060] },
        }),

        watch: {
            value: {
                handler(val) {
                    this.dob = val.dob
                    this.mobile_number = val.mobile_number
                },
                immediate: true,
            },
        },

        methods: {
            handleOnSubmit() {
                this.$emit("submit", {
                    dob: this.dob,
                    mobile_number: this.mobile_number,
                })
            },
        },
    }
</script>
