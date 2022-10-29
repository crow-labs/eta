import { Client, registry, MissingWalletError } from 'crow-labs-eta-client-ts'

import { Item } from "crow-labs-eta-client-ts/crowlabs.eta.market/types"
import { Listing } from "crow-labs-eta-client-ts/crowlabs.eta.market/types"
import { Params } from "crow-labs-eta-client-ts/crowlabs.eta.market/types"


export { Item, Listing, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Item: {},
				ItemAll: {},
				Listing: {},
				ListingAll: {},
				
				_Structure: {
						Item: getStructure(Item.fromPartial({})),
						Listing: getStructure(Listing.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getItem: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Item[JSON.stringify(params)] ?? {}
		},
				getItemAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ItemAll[JSON.stringify(params)] ?? {}
		},
				getListing: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Listing[JSON.stringify(params)] ?? {}
		},
				getListingAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListingAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: crowlabs.eta.market initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CrowlabsEtaMarket.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryItem({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CrowlabsEtaMarket.query.queryItem( key.itemId)).data
				
					
				commit('QUERY', { query: 'Item', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryItem', payload: { options: { all }, params: {...key},query }})
				return getters['getItem']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryItem API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryItemAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CrowlabsEtaMarket.query.queryItemAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CrowlabsEtaMarket.query.queryItemAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ItemAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryItemAll', payload: { options: { all }, params: {...key},query }})
				return getters['getItemAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryItemAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListing({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CrowlabsEtaMarket.query.queryListing( key.listingId)).data
				
					
				commit('QUERY', { query: 'Listing', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListing', payload: { options: { all }, params: {...key},query }})
				return getters['getListing']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListing API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListingAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CrowlabsEtaMarket.query.queryListingAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CrowlabsEtaMarket.query.queryListingAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListingAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListingAll', payload: { options: { all }, params: {...key},query }})
				return getters['getListingAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListingAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
	}
}
