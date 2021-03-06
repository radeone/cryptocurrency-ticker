'use strict';

const request = require('request');

const pairs = [
  '$$$_btc',
  '1337_btc',
  '1337_doge',
  '$$$_ltc',
  '$$$_doge',
  '1337_ltc',
  '21m_btc',
  '21m_doge',
  '21m_ltc',
  '300_doge',
  '300_btc',
  '42_btc',
  '300_ltc',
  '4chn_btc',
  '4chn_doge',
  '4chn_ltc',
  '611_btc',
  '611_doge',
  '611_ltc',
  '808_btc',
  '808_doge',
  '42_ltc',
  '42_doge',
  '888_doge',
  '808_ltc',
  '8bit_btc',
  '8bit_doge',
  '8bit_ltc',
  'abc_btc',
  'abc_doge',
  'abc_ltc',
  'aby_btc',
  '888_btc',
  'aby_doge',
  'ac_btc',
  '888_ltc',
  'aby_ltc',
  'acc_doge',
  'ac_doge',
  'acc_btc',
  'acoin_btc',
  'acoin_doge',
  'acc_ltc',
  'acoin_ltc',
  'adc_doge',
  'adc_ltc',
  'adst_doge',
  'adst_btc',
  'adst_ltc',
  'aga_doge',
  'ac_ltc',
  'adc_btc',
  'alex_btc',
  'aga_ltc',
  'alex_doge',
  'all_btc',
  'alex_ltc',
  'all_doge',
  'alt_doge',
  'amp_btc',
  'all_ltc',
  'amp_doge',
  'alt_btc',
  'ani_doge',
  'alt_ltc',
  'ani_ltc',
  'ani_btc',
  'arc_doge',
  'arc_btc',
  'amp_ltc',
  'arco_btc',
  'arco_doge',
  'arco_ltc',
  'arg_doge',
  'arg_btc',
  'argus_btc',
  'arg_ltc',
  'argus_doge',
  'ari_doge',
  'argus_ltc',
  'ari_ltc',
  'arc_ltc',
  'ark_btc',
  'ark_doge',
  'ari_btc',
  'ark_usdt',
  'atms_doge',
  'atms_btc',
  'ark_ltc',
  'atms_ltc',
  'atom_doge',
  'atom_ltc',
  'au_doge',
  'atom_btc',
  'au_btc',
  'aur_btc',
  'aur_doge',
  'au_ltc',
  'aur_ltc',
  'b@_doge',
  'b3_ltc',
  'b3_btc',
  'b3_doge',
  'bat_doge',
  'b@_btc',
  'bat_ltc',
  'bay_btc',
  'bay_doge',
  'bay_ltc',
  'bbr_doge',
  'bbr_btc',
  'bcf_btc',
  'bbr_ltc',
  'bcf_doge',
  'bcf_ltc',
  'bch_btc',
  'bch_doge',
  'bch_ltc',
  'b@_ltc',
  'bch_usdt',
  'bcn_doge',
  'bch_nzdt',
  'beez_btc',
  'beez_doge',
  'bcn_btc',
  'beez_ltc',
  'benji_btc',
  'benji_doge',
  'bern_btc',
  'benji_ltc',
  'bcn_ltc',
  'bern_doge',
  'bern_ltc',
  'best_doge',
  'best_ltc',
  'bgr_doge',
  'bgr_ltc',
  'best_btc',
  'bip_doge',
  'bip_btc',
  'bird_doge',
  'bip_ltc',
  'bitb_btc',
  'bitb_doge',
  'bitb_ltc',
  'bits_btc',
  'bits_doge',
  'bird_ltc',
  'blc_btc',
  'bits_ltc',
  'blk_btc',
  'blc_doge',
  'blk_ltc',
  'blk_doge',
  'blc_ltc',
  'blz_doge',
  'bnc_doge',
  'blz_ltc',
  'bnc_btc',
  'bnc_ltc',
  'bnx_doge',
  'bob_btc',
  'bob_doge',
  'bnx_btc',
  'boli_btc',
  'boli_doge',
  'bob_ltc',
  'boli_ltc',
  'boson_doge',
  'boson_ltc',
  'brg_ltc',
  'brg_doge',
  'bro_btc',
  'bro_doge',
  'bnx_ltc',
  'bsd_doge',
  'bsd_usdt',
  'bro_ltc',
  'bsty_btc',
  'bsd_btc',
  'bsty_doge',
  'bta_btc',
  'bsty_ltc',
  'bta_doge',
  'btb_btc',
  'btb_doge',
  'btb_ltc',
  'bsd_ltc',
  'btc_nzdt',
  'btc_usdt',
  'bta_ltc',
  'btcd_doge',
  'btcd_btc',
  'btcs_doge',
  'btcs_btc',
  'btg_btc',
  'btcs_ltc',
  'btg_doge',
  'btcd_ltc',
  'btx_doge',
  'btx_btc',
  'btx_ltc',
  'bucks_doge',
  'bucks_ltc',
  'btg_ltc',
  'bucks_btc',
  'bumba_btc',
  'bumba_doge',
  'bun_ltc',
  'bun_doge',
  'bumba_ltc',
  'bvb_ltc',
  'bvb_doge',
  'bvc_btc',
  'bvc_doge',
  'bxc_btc',
  'bvc_ltc',
  'bxc_doge',
  'bxc_ltc',
  'bvb_btc',
  'c2_ltc',
  'c2_doge',
  'cach_btc',
  'cach_doge',
  'cage_doge',
  'cage_ltc',
  'c2_btc',
  'cach_ltc',
  'cann_doge',
  'cap_btc',
  'cann_btc',
  'cann_ltc',
  'cap_doge',
  'cap_ltc',
  'car_doge',
  'cat_btc',
  'car_ltc',
  'cat_doge',
  'cat_ltc',
  'cbx_btc',
  'cbx_doge',
  'cc_btc',
  'car_btc',
  'cc_doge',
  'cbx_ltc',
  'ccb_doge',
  'ccb_ltc',
  'ccn_btc',
  'ccn_doge',
  'cc_ltc',
  'cdc_btc',
  'ccn_ltc',
  'cdc_doge',
  'cdc_ltc',
  'cdn_doge',
  'cdn_ltc',
  'cfc_btc',
  'cfc_doge',
  'cft_btc',
  'cdn_btc',
  'cft_doge',
  'cft_ltc',
  'chao_btc',
  'chao_doge',
  'chc_btc',
  'chao_ltc',
  'chc_doge',
  'chc_nzdt',
  'chc_ltc',
  'chc_usdt',
  'chess_btc',
  'chess_doge',
  'chief_btc',
  'chief_doge',
  'chess_ltc',
  'cir_doge',
  'chief_ltc',
  'cj_doge',
  'cfc_ltc',
  'clam_btc',
  'cir_ltc',
  'clam_doge',
  'clam_ltc',
  'cj_ltc',
  'cloak_doge',
  'cloak_btc',
  'cmt_btc',
  'cloak_ltc',
  'cmt_doge',
  'cno_btc',
  'cno_doge',
  'cj_btc',
  'cmt_ltc',
  'coal_btc',
  'coal_doge',
  'coe_btc',
  'coal_ltc',
  'coe_doge',
  'con_btc',
  'con_doge',
  'coe_ltc',
  'corg_btc',
  'corg_doge',
  'corg_ltc',
  'con_ltc',
  'cno_ltc',
  'cpn_doge',
  'cpn_btc',
  'cqst_btc',
  'cqst_doge',
  'crave_btc',
  'crave_doge',
  'cqst_ltc',
  'crave_ltc',
  'cpn_ltc',
  'crea_ltc',
  'crea_doge',
  'crx_btc',
  'crea_btc',
  'crx_doge',
  'crypt_btc',
  'crypt_doge',
  'crx_ltc',
  'crypt_ltc',
  'csc_doge',
  'csc_ltc',
  'cst_doge',
  'ctic2_btc',
  'cst_ltc',
  'ctic2_doge',
  'ctic2_ltc',
  'cube_doge',
  'csc_btc',
  'cube_ltc',
  'cxt_btc',
  'cv2_doge',
  'cxt_ltc',
  'cxt_doge',
  'cv2_ltc',
  'dalc_btc',
  'dark_btc',
  'dalc_doge',
  'dark_ltc',
  'dark_doge',
  'das_doge',
  'das_btc',
  'dash_doge',
  'das_ltc',
  'dalc_ltc',
  'dash_usdt',
  'dash_ltc',
  'daxx_doge',
  'dash_btc',
  'dcn_btc',
  'daxx_btc',
  'dcn_ltc',
  'daxx_ltc',
  'dcr_btc',
  'dcn_doge',
  'dcr_ltc',
  'dcr_doge',
  'dcy_doge',
  'dcy_btc',
  'dcr_usdt',
  'ddf_btc',
  'ddf_doge',
  'ddf_ltc',
  'dem_doge',
  'dem_btc',
  'dem_ltc',
  'dcy_ltc',
  'dgb_doge',
  'dgb_btc',
  'dgc_doge',
  'dgc_btc',
  'dgc_ltc',
  'dibc_btc',
  'dibc_doge',
  'dime_doge',
  'dime_ltc',
  'dgb_ltc',
  'dibc_ltc',
  'dnr_btc',
  'dnr_doge',
  'dnr_ltc',
  'doge_btc',
  'doge_ltc',
  'doge_nzdt',
  'doge_usdt',
  'don_btc',
  'don_doge',
  'dope_btc',
  'dope_doge',
  'dope_ltc',
  'don_ltc',
  'dot_doge',
  'dot_usdt',
  'dot_nzdt',
  'dot_btc',
  'drp_doge',
  'drp_btc',
  'drxne_btc',
  'drxne_doge',
  'dot_ltc',
  'drxne_ltc',
  'drp_ltc',
  'dsh_ltc',
  'dsh_doge',
  'dsh_btc',
  'duo_doge',
  'ebg_btc',
  'duo_btc',
  'ebg_doge',
  'ebg_ltc',
  'ec_doge',
  'ec_btc',
  'duo_ltc',
  'eco_btc',
  'eco_doge',
  'ecob_btc',
  'ecob_doge',
  'ec_ltc',
  'eco_ltc',
  'ecob_ltc',
  'edc_btc',
  'edc_doge',
  'edrc_btc',
  'edrc_doge',
  'edc_ltc',
  'edrc_ltc',
  'efl_ltc',
  'efl_doge',
  'egc_doge',
  'efl_btc',
  'elc_btc',
  'egc_ltc',
  'elc_doge',
  'elc_ltc',
  'elp_doge',
  'elp_ltc',
  'els_doge',
  'els_btc',
  'emb_btc',
  'els_ltc',
  'emb_doge',
  'emc_btc',
  'emc_doge',
  'emb_ltc',
  'egc_btc',
  'emc2_btc',
  'emc2_doge',
  'emd_doge',
  'emd_btc',
  'emc2_ltc',
  'epc_doge',
  'emd_ltc',
  'eqt_btc',
  'emc_ltc',
  'eqt_doge',
  'erso_btc',
  'eqt_ltc',
  'epc_ltc',
  'erso_ltc',
  'erso_doge',
  'ery_ltc',
  'ery_doge',
  'etb_btc',
  'etb_doge',
  'etc_btc',
  'ery_btc',
  'etc_nzdt',
  'etb_ltc',
  'etc_doge',
  'etc_usdt',
  'etc_ltc',
  'eth_doge',
  'eth_btc',
  'eth_nzdt',
  'ett_btc',
  'eth_usdt',
  'ett_ltc',
  'ett_doge',
  'euc_ltc',
  'eth_ltc',
  'evil_btc',
  'evil_doge',
  'evil_ltc',
  'euc_doge',
  'euc_btc',
  'evo_doge',
  'evo_ltc',
  'exp_doge',
  'exp_btc',
  'exp_ltc',
  'fame_btc',
  'fame_doge',
  'evo_btc',
  'fame_ltc',
  'fazz_doge',
  'fazz_ltc',
  'fazz_btc',
  'fcn_doge',
  'fct_btc',
  'fcn_btc',
  'fct_doge',
  'ffc_btc',
  'fct_ltc',
  'ffc_doge',
  'fcn_ltc',
  'fjc_doge',
  'ffc_ltc',
  'fjc_ltc',
  'flash_btc',
  'flash_doge',
  'fjc_btc',
  'flax_btc',
  'flax_doge',
  'flax_ltc',
  'flash_ltc',
  'fln_ltc',
  'fln_doge',
  'flt_doge',
  'flt_btc',
  'fonz_btc',
  'fonz_doge',
  'foot_btc',
  'flt_ltc',
  'fonz_ltc',
  'fort_btc',
  'foot_doge',
  'fort_ltc',
  'fort_doge',
  'frc_doge',
  'frc_btc',
  'foot_ltc',
  'frc_ltc',
  'frn_btc',
  'frn_doge',
  'fry_doge',
  'frn_ltc',
  'fry_ltc',
  'fst_doge',
  'fst_ltc',
  'fst_btc',
  'ftc_doge',
  'ftcc_doge',
  'ftc_ltc',
  'ftcc_ltc',
  'fuel_doge',
  'fuel_btc',
  'funk_doge',
  'funk_ltc',
  'ftc_btc',
  'fuzz_btc',
  'fuel_ltc',
  'fuzz_doge',
  'gaia_doge',
  'fuzz_ltc',
  'game_btc',
  'gaia_btc',
  'game_doge',
  'game_ltc',
  'gap_doge',
  'gap_btc',
  'gaia_ltc',
  'gay_btc',
  'gay_doge',
  'gbn_ltc',
  'gay_ltc',
  'gbyte_doge',
  'gbyte_btc',
  'gbyte_ltc',
  'gbn_doge',
  'gap_ltc',
  'gcn_doge',
  'gdc_doge',
  'gdc_ltc',
  'geert_btc',
  'geert_doge',
  'geo_btc',
  'geo_doge',
  'geo_ltc',
  'geert_ltc',
  'gld_btc',
  'gld_doge',
  'gcn_ltc',
  'gno_btc',
  'gld_ltc',
  'gnt_doge',
  'gnt_btc',
  'gnt_ltc',
  'gp_doge',
  'gno_ltc',
  'gp_ltc',
  'gpl_btc',
  'gpl_doge',
  'gpu_btc',
  'gno_doge',
  'gpl_ltc',
  'gpu_doge',
  'gpu_ltc',
  'grn_doge',
  'grs_btc',
  'grn_ltc',
  'grs_doge',
  'grs_ltc',
  'gp_btc',
  'grw_btc',
  'grw_ltc',
  'grw_doge',
  'grn_btc',
  'grwi_btc',
  'grwi_doge',
  'gun_doge',
  'gxg_doge',
  'grwi_ltc',
  'gun_ltc',
  'hal_btc',
  'gxg_ltc',
  'hal_doge',
  'hbn_btc',
  'hbn_doge',
  'gun_btc',
  'hush_btc',
  'hal_ltc',
  'hush_ltc',
  'hush_doge',
  'hush_nzdt',
  'hbn_ltc',
  'hush_usdt',
  'hxx_doge',
  'hxx_btc',
  'hyp_doge',
  'hxx_ltc',
  'i0c_btc',
  'hyp_btc',
  'hyp_ltc',
  'i0c_doge',
  'i0c_ltc',
  'icob_doge',
  'iec_doge',
  'icob_btc',
  'icob_ltc',
  'ifc_ltc',
  'ifc_doge',
  'iflt_doge',
  'iflt_btc',
  'iec_btc',
  'iflt_ltc',
  'ift_btc',
  'ift_doge',
  'iec_ltc',
  'impch_btc',
  'impch_ltc',
  'impch_doge',
  'ims_doge',
  'ift_ltc',
  'in_btc',
  'ims_ltc',
  'in_ltc',
  'ims_btc',
  'incnt_doge',
  'incnt_btc',
  'in_doge',
  'incnt_ltc',
  'inpay_btc',
  'infx_btc',
  'infx_doge',
  'inpay_doge',
  'inpay_usdt',
  'insn_btc',
  'inpay_ltc',
  'insn_doge',
  'infx_ltc',
  'insn_ltc',
  'iou_doge',
  'iou_btc',
  'irl_doge',
  'irl_btc',
  'iou_ltc',
  'iti_doge',
  'iti_btc',
  'irl_ltc',
  'ixc_doge',
  'iti_ltc',
  'ixc_ltc',
  'jet_btc',
  'jet_doge',
  'kash_doge',
  'jet_ltc',
  'kash_btc',
  'kayi_btc',
  'kash_ltc',
  'kayi_doge',
  'kdc_btc',
  'kayi_ltc',
  'kdc_doge',
  'kdc_ltc',
  'ked_btc',
  'ked_ltc',
  'ked_doge',
  'kek_doge',
  'kek_ltc',
  'king_btc',
  'kek_btc',
  'king_doge',
  'king_ltc',
  'ixc_btc',
  'kmd_doge',
  'kmd_ltc',
  'kobo_doge',
  'kobo_ltc',
  'kmd_btc',
  'kobo_btc',
  'krb_ltc',
  'krb_doge',
  'krb_btc',
  'krc_doge',
  'krc_btc',
  'kuma_doge',
  'krc_ltc',
  'kuma_ltc',
  'kurt_doge',
  'kurt_btc',
  'kush_btc',
  'kurt_ltc',
  'kush_doge',
  'lana_doge',
  'lana_ltc',
  'kush_ltc',
  'lbc_btc',
  'lana_btc',
  'lbtc_doge',
  'lbc_doge',
  'lbc_ltc',
  'lbtc_btc',
  'ldc_ltc',
  'lbtc_ltc',
  'ldoge_btc',
  'ldc_btc',
  'ldc_doge',
  'ldoge_ltc',
  'ldoge_doge',
  'lea_ltc',
  'leaf_doge',
  'lea_doge',
  'lemon_btc',
  'lemon_doge',
  'lepen_btc',
  'leaf_ltc',
  'lemon_ltc',
  'lepen_ltc',
  'lepen_doge',
  'lftc_ltc',
  'linda_btc',
  'linda_doge',
  'linx_btc',
  'lftc_doge',
  'linx_doge',
  'lit_btc',
  'linx_ltc',
  'lit_ltc',
  'linda_ltc',
  'lit_doge',
  'look_doge',
  'lizi_ltc',
  'lizi_doge',
  'lizi_btc',
  'look_ltc',
  'ltb_btc',
  'lot_doge',
  'lot_ltc',
  'ltb_doge',
  'ltc_btc',
  'ltc_usdt',
  'ltc_nzdt',
  'ltcu_doge',
  'ltb_ltc',
  'ltcu_btc',
  'lyc_ltc',
  'ltcu_ltc',
  'lyc_doge',
  'mac_btc',
  'magn_doge',
  'mac_doge',
  'magn_btc',
  'maid_btc',
  'maid_doge',
  'magn_ltc',
  'maid_ltc',
  'mar_btc',
  'mar_doge',
  'mars_btc',
  'mars_doge',
  'mar_ltc',
  'mars_ltc',
  'mac_ltc',
  'marx_btc',
  'marx_doge',
  'marx_ltc',
  'mcc_doge',
  'mcl_ltc',
  'mcl_doge',
  'mcc_ltc',
  'mcrn_btc',
  'mec_btc',
  'mcrn_doge',
  'mec_ltc',
  'mec_doge',
  'meow_doge',
  'mer_btc',
  'meow_ltc',
  'mcrn_ltc',
  'mer_ltc',
  'mgo_btc',
  'mgo_doge',
  'mer_doge',
  'minex_btc',
  'minex_doge',
  'mint_btc',
  'minex_ltc',
  'mint_doge',
  'mgo_ltc',
  'mint_ltc',
  'mlite_doge',
  'mne_btc',
  'mlite_ltc',
  'mlite_btc',
  'mne_doge',
  'mnm_btc',
  'mnm_doge',
  'mne_ltc',
  'moin_btc',
  'moin_doge',
  'mnm_ltc',
  'moin_ltc',
  'mojo_doge',
  'moto_btc',
  'moto_doge',
  'moto_ltc',
  'mojo_btc',
  'mrsa_doge',
  'mrsa_ltc',
  'mojo_ltc',
  'msp_btc',
  'msp_doge',
  'msp_ltc',
  'mst_doge',
  'mtlmc_btc',
  'mtlmc_doge',
  'mst_btc',
  'music_btc',
  'mst_ltc',
  'mtlmc_ltc',
  'mzc_btc',
  'music_ltc',
  'music_doge',
  'mzc_doge',
  'namo_btc',
  'namo_doge',
  'mzc_ltc',
  'nav_doge',
  'nav_ltc',
  'nav_usdt',
  'net_doge',
  'namo_ltc',
  'nav_btc',
  'netko_btc',
  'net_btc',
  'netko_doge',
  'neva_btc',
  'netko_ltc',
  'neva_doge',
  'nka_btc',
  'neva_ltc',
  'nka_ltc',
  'nka_doge',
  'nlc2_doge',
  'nlc2_ltc',
  'nmc_btc',
  'nlc2_btc',
  'nmc_ltc',
  'nmc_doge',
  'nobl_doge',
  'nobl_btc',
  'net_ltc',
  'nobl_ltc',
  'note_doge',
  'note_ltc',
  'nsr_doge',
  'nsr_ltc',
  'note_btc',
  'ntrn_doge',
  'ntrn_btc',
  'nsr_btc',
  'ntrn_ltc',
  'nvc_ltc',
  'nvc_doge',
  'nxs_btc',
  'nxs_doge',
  'nxs_ltc',
  'nyan_btc',
  'nyan_doge',
  'nyan_ltc',
  'off_btc',
  'nvc_btc',
  'off_doge',
  'off_ltc',
  'ok_doge',
  'ok_btc',
  'nzdt_usdt',
  'ooo_btc',
  'ooo_doge',
  'opal_btc',
  'opal_doge',
  'opal_ltc',
  'ooo_ltc',
  'orb_doge',
  'orb_btc',
  'orb_ltc',
  'osc_doge',
  'osc_ltc',
  'osc_btc',
  'otx_btc',
  'otx_doge',
  'otx_ltc',
  'ox_doge',
  'ox_ltc',
  'ox_btc',
  'ozc_doge',
  'ok_ltc',
  'ozc_ltc',
  'pac_doge',
  'pak_btc',
  'pak_doge',
  'pasc_btc',
  'pasc_doge',
  'pak_ltc',
  'pasc_ltc',
  'pasl_btc',
  'pasl_doge',
  'pcc_doge',
  'pcc_btc',
  'pasl_ltc',
  'peng_doge',
  'peng_ltc',
  'pepe_doge',
  'pepe_btc',
  'pcc_ltc',
  'pepe_ltc',
  'pho_doge',
  'pfc_ltc',
  'pfc_doge',
  'phs_btc',
  'phs_doge',
  'phs_ltc',
  'pie_btc',
  'pie_doge',
  'piggy_btc',
  'pie_ltc',
  'piggy_ltc',
  'piggy_doge',
  'ping_btc',
  'ping_doge',
  'pink_btc',
  'ping_ltc',
  'pink_doge',
  'pivx_btc',
  'pink_ltc',
  'pivx_doge',
  'pivx_usdt',
  'plc_btc',
  'pivx_ltc',
  'plc_ltc',
  'plc_doge',
  'plr_btc',
  'plr_doge',
  'pho_ltc',
  'pnd_doge',
  'pop_doge',
  'pnd_ltc',
  'post_btc',
  'pop_ltc',
  'post_ltc',
  'post_doge',
  'plr_ltc',
  'posw_doge',
  'pot_btc',
  'posw_ltc',
  'pot_ltc',
  'posw_btc',
  'pot_doge',
  'ppc_btc',
  'ppc_doge',
  'pr_btc',
  'ppc_ltc',
  'pr_doge',
  'proc_btc',
  'proc_doge',
  'proc_ltc',
  'ptc_doge',
  'pr_ltc',
  'ptc_btc',
  'ptc_ltc',
  'put_doge',
  'put_btc',
  'pxc_btc',
  'pxc_doge',
  'pxi_btc',
  'pxi_doge',
  'q2c_btc',
  'pxc_ltc',
  'q2c_doge',
  'put_ltc',
  'qbt_btc',
  'pxi_ltc',
  'qbt_doge',
  'qbt_ltc',
  'qrk_doge',
  'q2c_ltc',
  'qrk_ltc',
  'qtl_btc',
  'qtl_doge',
  'rain_btc',
  'qrk_btc',
  'rain_doge',
  'rbbt_doge',
  'qtl_ltc',
  'rain_ltc',
  'rbt_doge',
  'rbbt_ltc',
  'rbx_btc',
  'rbx_doge',
  'rbt_btc',
  'rbt_ltc',
  'rby_btc',
  'rby_doge',
  'rc_btc',
  'rbx_ltc',
  'rc_doge',
  'rc_ltc',
  'rby_ltc',
  'rdd_doge',
  'rdd_ltc',
  'red_btc',
  'red_doge',
  'rep_btc',
  'rdd_btc',
  'rep_doge',
  'rep_ltc',
  'riya_btc',
  'red_ltc',
  'riya_doge',
  'riya_ltc',
  'rns_btc',
  'rns_doge',
  'rpc_doge',
  'rns_ltc',
  'safex_btc',
  'rpc_btc',
  'safex_doge',
  'sak_btc',
  'safex_ltc',
  'sak_ltc',
  'sak_doge',
  'sand_doge',
  'sand_btc',
  'sbc_btc',
  'sand_ltc',
  'sbc_ltc',
  'sbc_doge',
  'sc_btc',
  'rpc_ltc',
  'sc_doge',
  'sc_ltc',
  'scd_btc',
  'score_doge',
  'score_btc',
  'sel_btc',
  'scd_doge',
  'score_ltc',
  'sel_ltc',
  'sel_doge',
  'sfc_doge',
  'sfc_ltc',
  'scd_ltc',
  'sha_btc',
  'sha_doge',
  'shnd_doge',
  'sha_ltc',
  'shrm_doge',
  'shrm_btc',
  'sfc_btc',
  'shnd_ltc',
  'shrm_ltc',
  'sib_btc',
  'sib_doge',
  'sigt_doge',
  'sib_ltc',
  'sigt_ltc',
  'sigt_btc',
  'sjw_ltc',
  'sjw_doge',
  'skc_ltc',
  'skc_doge',
  'sky_btc',
  'skr_ltc',
  'skr_btc',
  'skr_doge',
  'sky_doge',
  'sky_ltc',
  'sky_nzdt',
  'sky_usdt',
  'skc_btc',
  'slg_doge',
  'slg_ltc',
  'sloth_doge',
  'slg_btc',
  'sloth_ltc',
  'smart_doge',
  'smart_btc',
  'smart_ltc',
  'smc_ltc',
  'smc_doge',
  'smly_doge',
  'soil_btc',
  'smly_ltc',
  'soil_doge',
  'song_doge',
  'song_btc',
  'smc_btc',
  'soil_ltc',
  'song_ltc',
  'soon_doge',
  'soon_btc',
  'space_btc',
  'space_doge',
  'space_ltc',
  'spn_ltc',
  'soon_ltc',
  'spt_btc',
  'spn_doge',
  'sql_btc',
  'spt_doge',
  'sql_doge',
  'src_btc',
  'src_doge',
  'spt_ltc',
  'sql_ltc',
  'start_btc',
  'start_doge',
  'src_ltc',
  'start_ltc',
  'stc_ltc',
  'stc_doge',
  'strat_btc',
  'strat_doge',
  'strat_ltc',
  'stc_btc',
  'stv_doge',
  'sumo_btc',
  'stv_ltc',
  'sumo_doge',
  'sumo_ltc',
  'swing_btc',
  'swing_doge',
  'swing_ltc',
  'stv_btc',
  'sxc_ltc',
  'sxc_doge',
  'sxc_btc',
  'synx_ltc',
  'synx_doge',
  'taj_btc',
  'synx_btc',
  'taj_doge',
  'taj_ltc',
  'tek_doge',
  'tek_btc',
  'ter_doge',
  'ter_btc',
  'ter_ltc',
  'tek_ltc',
  'tes_doge',
  'tes_ltc',
  'tes_btc',
  'tgc_doge',
  'tic_btc',
  'tgc_ltc',
  'tic_doge',
  'tit_btc',
  'tit_doge',
  'tic_ltc',
  'toa_doge',
  'tgc_btc',
  'toa_btc',
  'toa_ltc',
  'top_doge',
  'top_btc',
  'top_ltc',
  'tor_btc',
  'tor_doge',
  'tor_ltc',
  'trbo_doge',
  'trbo_ltc',
  'trc_doge',
  'trc_btc',
  'tri_btc',
  'trc_ltc',
  'tri_doge',
  'tri_ltc',
  'trk_ltc',
  'tit_ltc',
  'trk_doge',
  'trump_btc',
  'trump_doge',
  'trump_ltc',
  'tse_doge',
  'tse_btc',
  'trk_btc',
  'tse_ltc',
  'ttc_doge',
  'ttc_btc',
  'tty_doge',
  'tty_ltc',
  'tx_btc',
  'ttc_ltc',
  'ubq_btc',
  'ubq_doge',
  'ubq_ltc',
  'uis_doge',
  'tx_ltc',
  'tx_doge',
  'umo_btc',
  'umo_doge',
  'uis_ltc',
  'unb_btc',
  'umo_ltc',
  'unb_doge',
  'unb_ltc',
  'unic_btc',
  'unic_doge',
  'unic_ltc',
  'unify_doge',
  'uis_btc',
  'unify_btc',
  'units_doge',
  'units_btc',
  'units_ltc',
  'unify_ltc',
  'uno_btc',
  'uno_doge',
  'ur_doge',
  'uno_ltc',
  'uno_usdt',
  'usnbt_btc',
  'usnbt_doge',
  'usnbt_ltc',
  'utc_btc',
  'utc_doge',
  'ur_btc',
  'utc_ltc',
  'ur_ltc',
  'v_doge',
  'v_btc',
  'vcc_btc',
  'vcc_doge',
  'vcc_ltc',
  'vidz_btc',
  'vidz_doge',
  'v_ltc',
  'vidz_ltc',
  'visio_doge',
  'visio_ltc',
  'visio_btc',
  'vprc_ltc',
  'vprc_doge',
  'vrc_doge',
  'vrm_doge',
  'vrc_ltc',
  'vrm_ltc',
  'vsm_btc',
  'vsm_doge',
  'vuc_btc',
  'vrc_btc',
  'vsm_ltc',
  'vuc_doge',
  'vuc_ltc',
  'waves_btc',
  'waves_ltc',
  'waves_doge',
  'waves_nzdt',
  'waves_usdt',
  'vrm_btc',
  'wdc_doge',
  'wdc_ltc',
  'weed_btc',
  'weed_doge',
  'weed_ltc',
  'wlc_btc',
  'wlc_doge',
  'wrc_btc',
  'wlc_ltc',
  'wrc_doge',
  'wrc_ltc',
  'wsx_doge',
  'wdc_btc',
  'ww_btc',
  'wsx_ltc',
  'ww_doge',
  'wsx_btc',
  'ww_ltc',
  'xbc_btc',
  'xbc_doge',
  'xbts_btc',
  'xbts_doge',
  'xby_btc',
  'xbts_ltc',
  'xby_doge',
  'xby_ltc',
  'xco_doge',
  'xco_btc',
  'xco_ltc',
  'xcre_btc',
  'xcre_doge',
  'xct_btc',
  'xcre_ltc',
  'xct_doge',
  'xct_ltc',
  'xcxt_btc',
  'xcxt_doge',
  'xem_btc',
  'xcxt_ltc',
  'xem_ltc',
  'xem_doge',
  'xgr_btc',
  'xgr_doge',
  'xbc_ltc',
  'xid_doge',
  'xgr_ltc',
  'xid_btc',
  'xjo_ltc',
  'xjo_btc',
  'xjo_doge',
  'xid_ltc',
  'xlr_doge',
  'xmg_doge',
  'xlr_ltc',
  'xmg_btc',
  'xmr_btc',
  'xlr_btc',
  'xmr_ltc',
  'xmr_doge',
  'xmr_nzdt',
  'xmr_usdt',
  'xmy_ltc',
  'xmg_ltc',
  'xmy_doge',
  'xpd_btc',
  'xpd_doge',
  'xpd_ltc',
  'xpm_doge',
  'xpm_ltc',
  'xptx_btc',
  'xptx_doge',
  'xmy_btc',
  'xptx_ltc',
  'xra_btc',
  'xra_doge',
  'xpm_btc',
  'xre_doge',
  'xre_btc',
  'xra_ltc',
  'xry_doge',
  'xre_ltc',
  'xspec_btc',
  'xry_btc',
  'xspec_ltc',
  'xspec_doge',
  'xvg_btc',
  'xvg_doge',
  'xry_ltc',
  'xvg_ltc',
  'xzc_doge',
  'xzc_btc',
  'yovi_btc',
  'yovi_doge',
  'yovi_ltc',
  'zcl_doge',
  'zcl_btc',
  'zec_btc',
  'zec_doge',
  'zec_ltc',
  'zcl_ltc',
  'zec_nzdt',
  'zeit_btc',
  'zeit_doge',
  'zec_usdt',
  'zeit_ltc',
  'zer_ltc',
  'zer_doge',
  'zet_btc',
  'xzc_ltc',
  'zet_doge',
  'zet_ltc',
  'zer_btc',
  'zoi_doge',
  'zoi_btc',
  'zse_btc',
  'zoi_ltc',
  'zse_doge',
  'zse_ltc'
];

module.exports = {
	pairs,
	ticker: (pair) => {
		return new Promise((resolve, reject) => {
			if(pairs.includes(pair)) {
				request({
					url: `https://www.cryptopia.co.nz/api/GetMarket/${pair}`,
					timeout: 2000
				}, (err, res, body) => {
					if(!err && res.statusCode === 200) {
						const x = JSON.parse(body)["Data"];
						console.log(x);
						resolve({
							exchange: 'cryptopia.co.nz',
							pair: pair,
							timestamp: (new Date()).getTime(),
							ask: parseFloat(x.AskPrice),
							bid: parseFloat(x.BidPrice),
							high: parseFloat(x.High),
							low: parseFloat(x.Low),
							vol: parseFloat(x.Volume),
							buyvolume: parseFloat(x.BuyVolume),
							sellvolume: parseFloat(x.SellVolume),
							basevolume: parseFloat(x.BaseVolume),		
							basebuyvolume: parseFloat(x.BaseBuyVolume),
							basesellvolume: parseFloat(x.BaseSellVolume),
							open: parseFloat(x.Open),
							close: parseFloat(x.Close),
							change: parseFloat(x.Change),
							last: parseFloat(x.LastPrice)
						});
					}
					else {
						resolve({
							exchange: 'cryptopia.co.nz',
							pair: pair,
							timestamp: undefined,
							ask: undefined,
							bid: undefined
						});
					}
				});
			}
			else {
				reject('pair is not supported');
			}
		});
	}
};
