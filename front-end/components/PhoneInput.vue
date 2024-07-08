<template>

    <div class="max-w-sm mx-auto">
        <div class="flex items-center">
            <v-autocomplete
                label="Your Phone Number">
                :items="countries"
            </v-autocomplete>
            <!-- <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                type="button">
                {{ chosenCountry.flag }}
                {{ chosenCountry.name }} ( {{ chosenCountry.key }} )
            </button>
            
            <div id="dropdown-phone"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52">
                <input id="search-input" v-model="searchCountryItem" @input="searchCountry" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off">
                <ul id="phone-list" class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-phone-button">
                    <li v-for="country in countries" >
                        <button type="button"
                            class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem" @click="openCountriesList">
                            <span class="inline-flex items-center country-item" :hidden="country.hideItem">
                                {{ country.flag }}
                                {{ country.name.common }} ({{ country.idd.root }}{{ country.idd.suffixes?country.idd.suffixes[0]:'' }})
                            </span>
                        </button>
                    </li>
                </ul>
            </div>  -->
            <!-- <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only">Phone
                number:</label>
            <div class="relative w-full">
                <input type="text" id="phone-input"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
            </div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { fetchCountries } from '@/services/countries';
export default {
    name:'PhoneInput',
    data(){
        return {
            searchCountryItem:"",
            chosenCountry:{
                flag:"",
                name:"",
                key:""
            },
            countries:[{
                hideItem:false,
                flag:"",
                name:{
                    common:""
                },
                idd:{
                    root:"",
                    suffixes:[]
                }
            }],
        }
    },
    async mounted(){
        this.countries = await fetchCountries();
        debugger
    },
    methods:{
        openCountriesList() {
            alert()
        },
    
    }
}
</script>